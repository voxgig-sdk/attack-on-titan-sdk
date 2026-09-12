"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'AttackOnTitan',
        slug: "attack-on-titan",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api.attackontitanapi.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            character: {},
            episode: {},
            location: {},
            organization: {},
            titan: {},
        }
    };
    entity = {
        "character": {
            "fields": [
                {
                    "name": "affiliation",
                    "short": "Character's affiliation or allegiance",
                    "type": "`$STRING`"
                },
                {
                    "name": "age",
                    "short": "Age of the character",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "gender",
                    "short": "Gender of the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "short": "Height of the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "occupation",
                    "short": "Character's occupation",
                    "type": "`$STRING`"
                },
                {
                    "name": "species",
                    "short": "Species of the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "Current status of the character",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "character",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/characters",
                            "segments": [
                                {
                                    "lit": "characters"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "characters"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/characters/{id}",
                            "segments": [
                                {
                                    "lit": "characters"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "characters",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "episode": {
            "fields": [
                {
                    "format": "date",
                    "name": "airDate",
                    "short": "Air date of the episode",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Synopsis or description of the episode",
                    "type": "`$STRING`"
                },
                {
                    "name": "episodeNumber",
                    "short": "Episode number within the season",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the episode",
                    "type": "`$STRING`"
                },
                {
                    "name": "season",
                    "short": "Season number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "title",
                    "short": "Title of the episode",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/episodes",
                            "segments": [
                                {
                                    "lit": "episodes"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "episodes"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/episodes/{id}",
                            "segments": [
                                {
                                    "lit": "episodes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "episodes",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "location": {
            "fields": [
                {
                    "name": "description",
                    "short": "Description of the location",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the location",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the location",
                    "type": "`$STRING`"
                },
                {
                    "name": "region",
                    "short": "Region where the location is situated",
                    "type": "`$STRING`"
                },
                {
                    "name": "significance",
                    "short": "Significance of the location in the series",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "location",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/locations",
                            "segments": [
                                {
                                    "lit": "locations"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "locations"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/locations/{id}",
                            "segments": [
                                {
                                    "lit": "locations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "locations",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "organization": {
            "fields": [
                {
                    "name": "allegiance",
                    "short": "Allegiance of the organization",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Description of the organization",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the organization",
                    "type": "`$STRING`"
                },
                {
                    "name": "leader",
                    "short": "Leader of the organization",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the organization",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Type or classification of the organization",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "organization",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations",
                            "segments": [
                                {
                                    "lit": "organizations"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "organizations"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "organizations",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "titan": {
            "fields": [
                {
                    "name": "abilities",
                    "short": "List of abilities possessed by the titan",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "allegiance",
                    "short": "Allegiance of the titan or its inheritor",
                    "type": "`$STRING`"
                },
                {
                    "name": "currentInheritor",
                    "short": "Current inheritor of the titan",
                    "type": "`$STRING`"
                },
                {
                    "name": "formerInheritors",
                    "short": "List of former inheritors",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "height",
                    "short": "Height of the titan",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the titan",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the titan",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "titan",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/titans",
                            "segments": [
                                {
                                    "lit": "titans"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "titans"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/titans/{id}",
                            "segments": [
                                {
                                    "lit": "titans"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "titans",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map