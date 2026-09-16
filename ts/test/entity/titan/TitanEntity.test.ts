

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"abilities","req":false,"short":"List of abilities possessed by the titan","type":"`$ARRAY`","index$":0},{"active":true,"name":"allegiance","req":false,"short":"Allegiance of the titan or its inheritor","type":"`$STRING`","index$":1},{"active":true,"name":"currentInheritor","req":false,"short":"Current inheritor of the titan","type":"`$STRING`","index$":2},{"active":true,"name":"formerInheritors","req":false,"short":"List of former inheritors","type":"`$ARRAY`","index$":3},{"active":true,"name":"height","req":false,"short":"Height of the titan","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"short":"Unique identifier for the titan","type":"`$STRING`","index$":5},{"active":true,"name":"name","req":false,"short":"Name of the titan","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"titan","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /titans","json":"{\"operationId\":\"getTitans\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"abilities\":{\"description\":\"List of abilities possessed by the titan\",\"example\":[\"Future memory inheritance\",\"Hardening\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"allegiance\":{\"description\":\"Allegiance of the titan or its inheritor\",\"example\":\"Eldia\",\"type\":\"string\"},\"currentInheritor\":{\"description\":\"Current inheritor of the titan\",\"example\":\"Eren Jaeger\",\"type\":\"string\"},\"formerInheritors\":{\"description\":\"List of former inheritors\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"height\":{\"description\":\"Height of the titan\",\"example\":\"15m\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the titan\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the titan\",\"example\":\"Attack Titan\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"A list of titans\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/titans","segments":[{"lit":"titans"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /titans/{id}","json":"{\"operationId\":\"getTitanById\",\"parameters\":[{\"description\":\"The ID of the titan to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"abilities\":{\"description\":\"List of abilities possessed by the titan\",\"example\":[\"Future memory inheritance\",\"Hardening\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"allegiance\":{\"description\":\"Allegiance of the titan or its inheritor\",\"example\":\"Eldia\",\"type\":\"string\"},\"currentInheritor\":{\"description\":\"Current inheritor of the titan\",\"example\":\"Eren Jaeger\",\"type\":\"string\"},\"formerInheritors\":{\"description\":\"List of former inheritors\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"height\":{\"description\":\"Height of the titan\",\"example\":\"15m\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the titan\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the titan\",\"example\":\"Attack Titan\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Titan details\"},\"404\":{\"description\":\"Titan not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/titans/{id}","segments":[{"lit":"titans"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"titan","name__orig":"titan","Name":"Titan","name_":"titan","name-":"titan","NAME":"TITAN","index$":4}, {"active":true,"entity":"titan","key$":"BasicTitanFlow","kind":"basic","name":"BasicTitanFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"titan_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"titan_ref01","srcdatavar":"titan_ref01_data","suffix":"_dt0"},"match":{"id":"titan01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-titan_ref01"}}],"index$":1}]}, 'Titan')
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
  
