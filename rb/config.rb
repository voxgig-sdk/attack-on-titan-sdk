# AttackOnTitan SDK configuration

module AttackOnTitanConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "AttackOnTitan",
        "slug" => "attack-on-titan",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.attackontitanapi.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "character" => {},
          "episode" => {},
          "location" => {},
          "organization" => {},
          "titan" => {},
        },
      },
      "entity" => {
        "character" => {
          "fields" => [
            {
              "name" => "affiliation",
              "short" => "Character's affiliation or allegiance",
              "type" => "`$STRING`",
            },
            {
              "name" => "age",
              "short" => "Age of the character",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "gender",
              "short" => "Gender of the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "height",
              "short" => "Height of the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "occupation",
              "short" => "Character's occupation",
              "type" => "`$STRING`",
            },
            {
              "name" => "species",
              "short" => "Species of the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Current status of the character",
              "type" => "`$STRING`",
            },
          ],
          "name" => "character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters",
                  "parts" => [
                    "characters",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}",
                  "parts" => [
                    "characters",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "episode" => {
          "fields" => [
            {
              "name" => "airDate",
              "short" => "Air date of the episode",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Synopsis or description of the episode",
              "type" => "`$STRING`",
            },
            {
              "name" => "episodeNumber",
              "short" => "Episode number within the season",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the episode",
              "type" => "`$STRING`",
            },
            {
              "name" => "season",
              "short" => "Season number",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "title",
              "short" => "Title of the episode",
              "type" => "`$STRING`",
            },
          ],
          "name" => "episode",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes",
                  "parts" => [
                    "episodes",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes/{id}",
                  "parts" => [
                    "episodes",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "location" => {
          "fields" => [
            {
              "name" => "description",
              "short" => "Description of the location",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the location",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the location",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "short" => "Region where the location is situated",
              "type" => "`$STRING`",
            },
            {
              "name" => "significance",
              "short" => "Significance of the location in the series",
              "type" => "`$STRING`",
            },
          ],
          "name" => "location",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/locations",
                  "parts" => [
                    "locations",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/locations/{id}",
                  "parts" => [
                    "locations",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "organization" => {
          "fields" => [
            {
              "name" => "allegiance",
              "short" => "Allegiance of the organization",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Description of the organization",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the organization",
              "type" => "`$STRING`",
            },
            {
              "name" => "leader",
              "short" => "Leader of the organization",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the organization",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Type or classification of the organization",
              "type" => "`$STRING`",
            },
          ],
          "name" => "organization",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/organizations",
                  "parts" => [
                    "organizations",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/organizations/{id}",
                  "parts" => [
                    "organizations",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "titan" => {
          "fields" => [
            {
              "name" => "abilities",
              "short" => "List of abilities possessed by the titan",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "allegiance",
              "short" => "Allegiance of the titan or its inheritor",
              "type" => "`$STRING`",
            },
            {
              "name" => "currentInheritor",
              "short" => "Current inheritor of the titan",
              "type" => "`$STRING`",
            },
            {
              "name" => "formerInheritors",
              "short" => "List of former inheritors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "height",
              "short" => "Height of the titan",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the titan",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the titan",
              "type" => "`$STRING`",
            },
          ],
          "name" => "titan",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/titans",
                  "parts" => [
                    "titans",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/titans/{id}",
                  "parts" => [
                    "titans",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    AttackOnTitanFeatures.make_feature(name)
  end
end
