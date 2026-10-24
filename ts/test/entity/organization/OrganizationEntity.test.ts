

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AttackOnTitanSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('OrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ATTACK_ON_TITAN_TEST_LIVE=TRUE.
  afterEach(liveDelay('ATTACK_ON_TITAN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AttackOnTitanSDK.test()
    const ent = testsdk.Organization()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('organization hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of AttackOnTitanSDK.test(offline).Organization().stream('list')) { }
    }, /offline/)

    for await (const _item of AttackOnTitanSDK.test(offline).Organization()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = AttackOnTitanSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Organization().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of AttackOnTitanSDK.test().Organization().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new AttackOnTitanSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Organization().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Organization().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = AttackOnTitanSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Organization().list({"allegiance":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ATTACK_ON_TITAN_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allegiance":{"a":true,"h":"Allegiance","n":"allegiance","r":false,"sh":"Allegiance of the organization","t":"`$STRING`","key$":"allegiance","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the organization","t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the organization","t":"`$STRING`","key$":"id","index$":2},"leader":{"a":true,"h":"Leader","n":"leader","r":false,"sh":"Leader of the organization","t":"`$STRING`","key$":"leader","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the organization","t":"`$STRING`","key$":"name","index$":4},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type or classification of the organization","t":"`$STRING`","key$":"type","index$":5}},"id":{"field":"id","name":"id"},"name":"organization","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /organizations","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/organizations","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"organizations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /organizations/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/organizations/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"organizations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"organization","name__orig":"organization","Name":"Organization","name_":"organization","name-":"organization","NAME":"ORGANIZATION","index$":3}, {"active":true,"entity":"organization","key$":"BasicOrganizationFlow","kind":"basic","name":"BasicOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"organization_ref01","srcdatavar":"organization_ref01_data","suffix":"_dt0"},"m":{"id":"organization01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_ref01"}}],"index$":1}]}, 'Organization', {"GET /organizations":{"protocol":"http","parameters":[]},"GET /organizations/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"description":"The ID of the organization to retrieve","schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_ref01_data = Object.values(setup.data.existing.organization)[0] as any

    // LIST
    const organization_ref01_ent = client.Organization()
    const organization_ref01_match: any = {}

    const organization_ref01_list = (await organization_ref01_ent.list(organization_ref01_match)).map((e: any) => e.data())


    // LOAD
    const organization_ref01_match_dt0: any = {}
    organization_ref01_match_dt0.id = organization_ref01_data.id
    const organization_ref01_data_dt0 = (await organization_ref01_ent.load(organization_ref01_match_dt0)).data()
    assert(organization_ref01_data_dt0.id === organization_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization/OrganizationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AttackOnTitanSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ATTACK_ON_TITAN_TEST_ORGANIZATION_ENTID': idmap,
    'ATTACK_ON_TITAN_TEST_LIVE': 'FALSE',
    'ATTACK_ON_TITAN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ATTACK_ON_TITAN_TEST_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.ATTACK_ON_TITAN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ATTACK_ON_TITAN_TEST_ORGANIZATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AttackOnTitanSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ATTACK_ON_TITAN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
