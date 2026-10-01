import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "character",
    "accessor": "Character",
    "op": "list",
    "method": "GET",
    "path": "/characters",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "species": "x",
        "gender": "x",
        "age": 1,
        "height": "x",
        "affiliation": "x",
        "occupation": "x",
        "status": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "character",
    "accessor": "Character",
    "op": "load",
    "method": "GET",
    "path": "/characters/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "name": "x",
      "species": "x",
      "gender": "x",
      "age": 1,
      "height": "x",
      "affiliation": "x",
      "occupation": "x",
      "status": "x"
    },
    "idField": "id"
  },
  {
    "entity": "episode",
    "accessor": "Episode",
    "op": "list",
    "method": "GET",
    "path": "/episodes",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "title": "x",
        "season": 1,
        "episodeNumber": 1,
        "airDate": "2026-01-01",
        "description": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "episode",
    "accessor": "Episode",
    "op": "load",
    "method": "GET",
    "path": "/episodes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "title": "x",
      "season": 1,
      "episodeNumber": 1,
      "airDate": "2026-01-01",
      "description": "x"
    },
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "list",
    "method": "GET",
    "path": "/locations",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "region": "x",
        "description": "x",
        "significance": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "load",
    "method": "GET",
    "path": "/locations/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "name": "x",
      "region": "x",
      "description": "x",
      "significance": "x"
    },
    "idField": "id"
  },
  {
    "entity": "organization",
    "accessor": "Organization",
    "op": "list",
    "method": "GET",
    "path": "/organizations",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "type": "x",
        "allegiance": "x",
        "description": "x",
        "leader": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "organization",
    "accessor": "Organization",
    "op": "load",
    "method": "GET",
    "path": "/organizations/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "name": "x",
      "type": "x",
      "allegiance": "x",
      "description": "x",
      "leader": "x"
    },
    "idField": "id"
  },
  {
    "entity": "titan",
    "accessor": "Titan",
    "op": "list",
    "method": "GET",
    "path": "/titans",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "Attack Titan",
        "height": "15m",
        "currentInheritor": "Eren Jaeger",
        "allegiance": "Eldia",
        "abilities": [
          "Future memory inheritance",
          "Hardening"
        ],
        "formerInheritors": [
          "x"
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "titan",
    "accessor": "Titan",
    "op": "load",
    "method": "GET",
    "path": "/titans/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "name": "Attack Titan",
      "height": "15m",
      "currentInheritor": "Eren Jaeger",
      "allegiance": "Eldia",
      "abilities": [
        "Future memory inheritance",
        "Hardening"
      ],
      "formerInheritors": [
        "x"
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
