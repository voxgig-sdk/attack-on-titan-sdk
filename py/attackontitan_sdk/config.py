# AttackOnTitan SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "AttackOnTitan",
            "slug": "attack-on-titan",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.attackontitanapi.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "episode": {},
                "location": {},
                "organization": {},
                "titan": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "affiliation",
            "short": "Character's affiliation or allegiance",
            "type": "`$STRING`",
          },
          {
            "name": "age",
            "short": "Age of the character",
            "type": "`$INTEGER`",
          },
          {
            "name": "gender",
            "short": "Gender of the character",
            "type": "`$STRING`",
          },
          {
            "name": "height",
            "short": "Height of the character",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the character",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the character",
            "type": "`$STRING`",
          },
          {
            "name": "occupation",
            "short": "Character's occupation",
            "type": "`$STRING`",
          },
          {
            "name": "species",
            "short": "Species of the character",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the character",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "characters",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "characters",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/characters/{id}",
                "segments": [
                  {
                    "lit": "characters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "characters",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "episode": {
        "fields": [
          {
            "format": "date",
            "name": "airDate",
            "short": "Air date of the episode",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Synopsis or description of the episode",
            "type": "`$STRING`",
          },
          {
            "name": "episodeNumber",
            "short": "Episode number within the season",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the episode",
            "type": "`$STRING`",
          },
          {
            "name": "season",
            "short": "Season number",
            "type": "`$INTEGER`",
          },
          {
            "name": "title",
            "short": "Title of the episode",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "episodes",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "episodes",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/episodes/{id}",
                "segments": [
                  {
                    "lit": "episodes",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "episodes",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "location": {
        "fields": [
          {
            "name": "description",
            "short": "Description of the location",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the location",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the location",
            "type": "`$STRING`",
          },
          {
            "name": "region",
            "short": "Region where the location is situated",
            "type": "`$STRING`",
          },
          {
            "name": "significance",
            "short": "Significance of the location in the series",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "locations",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "locations",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/locations/{id}",
                "segments": [
                  {
                    "lit": "locations",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "locations",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "organization": {
        "fields": [
          {
            "name": "allegiance",
            "short": "Allegiance of the organization",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Description of the organization",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the organization",
            "type": "`$STRING`",
          },
          {
            "name": "leader",
            "short": "Leader of the organization",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the organization",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type or classification of the organization",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "organizations",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "organizations",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/organizations/{id}",
                "segments": [
                  {
                    "lit": "organizations",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "organizations",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "titan": {
        "fields": [
          {
            "name": "abilities",
            "short": "List of abilities possessed by the titan",
            "type": "`$ARRAY`",
          },
          {
            "name": "allegiance",
            "short": "Allegiance of the titan or its inheritor",
            "type": "`$STRING`",
          },
          {
            "name": "currentInheritor",
            "short": "Current inheritor of the titan",
            "type": "`$STRING`",
          },
          {
            "name": "formerInheritors",
            "short": "List of former inheritors",
            "type": "`$ARRAY`",
          },
          {
            "name": "height",
            "short": "Height of the titan",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the titan",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the titan",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "titans",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "titans",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/titans/{id}",
                "segments": [
                  {
                    "lit": "titans",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "titans",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
