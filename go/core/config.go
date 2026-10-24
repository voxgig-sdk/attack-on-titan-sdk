package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "AttackOnTitan",
			"slug": "attack-on-titan",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.attackontitanapi.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"character": map[string]any{},
				"episode": map[string]any{},
				"location": map[string]any{},
				"organization": map[string]any{},
				"titan": map[string]any{},
			},
		},
		"entity": map[string]any{
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "affiliation",
						"title": "Affiliation",
						"type": "`$STRING`",
						"short": "Character's affiliation or allegiance",
					},
					map[string]any{
						"name": "age",
						"title": "Age",
						"type": "`$INTEGER`",
						"short": "Age of the character",
					},
					map[string]any{
						"name": "gender",
						"title": "Gender",
						"type": "`$STRING`",
						"short": "Gender of the character",
					},
					map[string]any{
						"name": "height",
						"title": "Height",
						"type": "`$STRING`",
						"short": "Height of the character",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the character",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the character",
					},
					map[string]any{
						"name": "occupation",
						"title": "Occupation",
						"type": "`$STRING`",
						"short": "Character's occupation",
					},
					map[string]any{
						"name": "species",
						"title": "Species",
						"type": "`$STRING`",
						"short": "Species of the character",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Current status of the character",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
								},
								"parts": []any{
									"characters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"episode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "airDate",
						"title": "Air Date",
						"type": "`$STRING`",
						"short": "Air date of the episode",
						"format": "date",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Synopsis or description of the episode",
					},
					map[string]any{
						"name": "episodeNumber",
						"title": "Episode Number",
						"type": "`$INTEGER`",
						"short": "Episode number within the season",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the episode",
					},
					map[string]any{
						"name": "season",
						"title": "Season",
						"type": "`$INTEGER`",
						"short": "Season number",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Title of the episode",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "episode",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/episodes",
								"segments": []any{
									map[string]any{
										"lit": "episodes",
									},
								},
								"parts": []any{
									"episodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/episodes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "episodes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"episodes",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"location": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the location",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the location",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the location",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
						"short": "Region where the location is situated",
					},
					map[string]any{
						"name": "significance",
						"title": "Significance",
						"type": "`$STRING`",
						"short": "Significance of the location in the series",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/locations",
								"segments": []any{
									map[string]any{
										"lit": "locations",
									},
								},
								"parts": []any{
									"locations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/locations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "locations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"locations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allegiance",
						"title": "Allegiance",
						"type": "`$STRING`",
						"short": "Allegiance of the organization",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the organization",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the organization",
					},
					map[string]any{
						"name": "leader",
						"title": "Leader",
						"type": "`$STRING`",
						"short": "Leader of the organization",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the organization",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type or classification of the organization",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"organizations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"titan": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abilities",
						"title": "Abilities",
						"type": "`$ARRAY`",
						"short": "List of abilities possessed by the titan",
					},
					map[string]any{
						"name": "allegiance",
						"title": "Allegiance",
						"type": "`$STRING`",
						"short": "Allegiance of the titan or its inheritor",
					},
					map[string]any{
						"name": "currentInheritor",
						"title": "Current Inheritor",
						"type": "`$STRING`",
						"short": "Current inheritor of the titan",
					},
					map[string]any{
						"name": "formerInheritors",
						"title": "Former Inheritors",
						"type": "`$ARRAY`",
						"short": "List of former inheritors",
					},
					map[string]any{
						"name": "height",
						"title": "Height",
						"type": "`$STRING`",
						"short": "Height of the titan",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the titan",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the titan",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "titan",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/titans",
								"segments": []any{
									map[string]any{
										"lit": "titans",
									},
								},
								"parts": []any{
									"titans",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/titans/{id}",
								"segments": []any{
									map[string]any{
										"lit": "titans",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"titans",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
