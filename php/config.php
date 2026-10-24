<?php
declare(strict_types=1);

// AttackOnTitan SDK configuration

class AttackOnTitanConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "AttackOnTitan",
                "slug" => "attack-on-titan",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.attackontitanapi.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "character" => [],
                    "episode" => [],
                    "location" => [],
                    "organization" => [],
                    "titan" => [],
                ],
            ],
            "entity" => [
        'character' => [
          'fields' => [
            [
              'name' => 'affiliation',
              'title' => 'Affiliation',
              'type' => '`$STRING`',
              'short' => 'Character\'s affiliation or allegiance',
            ],
            [
              'name' => 'age',
              'title' => 'Age',
              'type' => '`$INTEGER`',
              'short' => 'Age of the character',
            ],
            [
              'name' => 'gender',
              'title' => 'Gender',
              'type' => '`$STRING`',
              'short' => 'Gender of the character',
            ],
            [
              'name' => 'height',
              'title' => 'Height',
              'type' => '`$STRING`',
              'short' => 'Height of the character',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the character',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name of the character',
            ],
            [
              'name' => 'occupation',
              'title' => 'Occupation',
              'type' => '`$STRING`',
              'short' => 'Character\'s occupation',
            ],
            [
              'name' => 'species',
              'title' => 'Species',
              'type' => '`$STRING`',
              'short' => 'Species of the character',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Current status of the character',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters',
                  'segments' => [
                    [
                      'lit' => 'characters',
                    ],
                  ],
                  'parts' => [
                    'characters',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}',
                  'segments' => [
                    [
                      'lit' => 'characters',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'characters',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'episode' => [
          'fields' => [
            [
              'name' => 'airDate',
              'title' => 'Air Date',
              'type' => '`$STRING`',
              'short' => 'Air date of the episode',
              'format' => 'date',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Synopsis or description of the episode',
            ],
            [
              'name' => 'episodeNumber',
              'title' => 'Episode Number',
              'type' => '`$INTEGER`',
              'short' => 'Episode number within the season',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the episode',
            ],
            [
              'name' => 'season',
              'title' => 'Season',
              'type' => '`$INTEGER`',
              'short' => 'Season number',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'short' => 'Title of the episode',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'episode',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes',
                  'segments' => [
                    [
                      'lit' => 'episodes',
                    ],
                  ],
                  'parts' => [
                    'episodes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes/{id}',
                  'segments' => [
                    [
                      'lit' => 'episodes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'episodes',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'location' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Description of the location',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the location',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name of the location',
            ],
            [
              'name' => 'region',
              'title' => 'Region',
              'type' => '`$STRING`',
              'short' => 'Region where the location is situated',
            ],
            [
              'name' => 'significance',
              'title' => 'Significance',
              'type' => '`$STRING`',
              'short' => 'Significance of the location in the series',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'location',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/locations',
                  'segments' => [
                    [
                      'lit' => 'locations',
                    ],
                  ],
                  'parts' => [
                    'locations',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/locations/{id}',
                  'segments' => [
                    [
                      'lit' => 'locations',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'locations',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'organization' => [
          'fields' => [
            [
              'name' => 'allegiance',
              'title' => 'Allegiance',
              'type' => '`$STRING`',
              'short' => 'Allegiance of the organization',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Description of the organization',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the organization',
            ],
            [
              'name' => 'leader',
              'title' => 'Leader',
              'type' => '`$STRING`',
              'short' => 'Leader of the organization',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name of the organization',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Type or classification of the organization',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'organization',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/organizations',
                  'segments' => [
                    [
                      'lit' => 'organizations',
                    ],
                  ],
                  'parts' => [
                    'organizations',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/organizations/{id}',
                  'segments' => [
                    [
                      'lit' => 'organizations',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'organizations',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'titan' => [
          'fields' => [
            [
              'name' => 'abilities',
              'title' => 'Abilities',
              'type' => '`$ARRAY`',
              'short' => 'List of abilities possessed by the titan',
            ],
            [
              'name' => 'allegiance',
              'title' => 'Allegiance',
              'type' => '`$STRING`',
              'short' => 'Allegiance of the titan or its inheritor',
            ],
            [
              'name' => 'currentInheritor',
              'title' => 'Current Inheritor',
              'type' => '`$STRING`',
              'short' => 'Current inheritor of the titan',
            ],
            [
              'name' => 'formerInheritors',
              'title' => 'Former Inheritors',
              'type' => '`$ARRAY`',
              'short' => 'List of former inheritors',
            ],
            [
              'name' => 'height',
              'title' => 'Height',
              'type' => '`$STRING`',
              'short' => 'Height of the titan',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the titan',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name of the titan',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'titan',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/titans',
                  'segments' => [
                    [
                      'lit' => 'titans',
                    ],
                  ],
                  'parts' => [
                    'titans',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/titans/{id}',
                  'segments' => [
                    [
                      'lit' => 'titans',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'titans',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return AttackOnTitanFeatures::make_feature($name);
    }
}
