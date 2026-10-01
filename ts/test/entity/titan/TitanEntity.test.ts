

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AttackOnTitanSDK, BaseFeature, stdutil } from '../../..'

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


describe('TitanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ATTACK_ON_TITAN_TEST_LIVE=TRUE.
  afterEach(liveDelay('ATTACK_ON_TITAN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AttackOnTitanSDK.test()
    const ent = testsdk.Titan()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ATTACK_ON_TITAN_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'titan.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"abilities":{"a":true,"h":"Abilities","n":"abilities","r":false,"sh":"List of abilities possessed by the titan","t":"`$ARRAY`","key$":"abilities","index$":0},"allegiance":{"a":true,"h":"Allegiance","n":"allegiance","r":false,"sh":"Allegiance of the titan or its inheritor","t":"`$STRING`","key$":"allegiance","index$":1},"currentInheritor":{"a":true,"h":"Current Inheritor","n":"currentInheritor","r":false,"sh":"Current inheritor of the titan","t":"`$STRING`","key$":"currentInheritor","index$":2},"formerInheritors":{"a":true,"h":"Former Inheritors","n":"formerInheritors","r":false,"sh":"List of former inheritors","t":"`$ARRAY`","key$":"formerInheritors","index$":3},"height":{"a":true,"h":"Height","n":"height","r":false,"sh":"Height of the titan","t":"`$STRING`","key$":"height","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the titan","t":"`$STRING`","key$":"id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the titan","t":"`$STRING`","key$":"name","index$":6}},"id":{"field":"id","name":"id"},"name":"titan","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /titans","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/titans","q":{},"r":{},"s":[{"lit":"titans"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /titans/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/titans/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"titans"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"titan","name__orig":"titan","Name":"Titan","name_":"titan","name-":"titan","NAME":"TITAN","index$":4}, {"active":true,"entity":"titan","key$":"BasicTitanFlow","kind":"basic","name":"BasicTitanFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"titan_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"titan_ref01","srcdatavar":"titan_ref01_data","suffix":"_dt0"},"m":{"id":"titan01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-titan_ref01"}}],"index$":1}]}, 'Titan', {"GET /titans":{"protocol":"http","parameters":[]},"GET /titans/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"description":"The ID of the titan to retrieve","schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let titan_ref01_data = Object.values(setup.data.existing.titan)[0] as any

    // LIST
    const titan_ref01_ent = client.Titan()
    const titan_ref01_match: any = {}

    const titan_ref01_list = (await titan_ref01_ent.list(titan_ref01_match)).map((e: any) => e.data())


    // LOAD
    const titan_ref01_match_dt0: any = {}
    titan_ref01_match_dt0.id = titan_ref01_data.id
    const titan_ref01_data_dt0 = (await titan_ref01_ent.load(titan_ref01_match_dt0)).data()
    assert(titan_ref01_data_dt0.id === titan_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/titan/TitanTestData.json')

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
    ['titan01','titan02','titan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ATTACK_ON_TITAN_TEST_TITAN_ENTID': idmap,
    'ATTACK_ON_TITAN_TEST_LIVE': 'FALSE',
    'ATTACK_ON_TITAN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ATTACK_ON_TITAN_TEST_TITAN_ENTID']

  const live = 'TRUE' === env.ATTACK_ON_TITAN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ATTACK_ON_TITAN_TEST_TITAN_ENTID']
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
  
