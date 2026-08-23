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
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'short' => 'Character\'s affiliation or allegiance',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'age',
              'short' => 'Age of the character',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'gender',
              'short' => 'Gender of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'short' => 'Height of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'occupation',
              'short' => 'Character\'s occupation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'species',
              'short' => 'Species of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the character',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters',
                  'parts' => [
                    'characters',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}',
                  'parts' => [
                    'characters',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Air date of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Synopsis or description of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'episodeNumber',
              'short' => 'Episode number within the season',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'season',
              'short' => 'Season number',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the episode',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'episode',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes',
                  'parts' => [
                    'episodes',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes/{id}',
                  'parts' => [
                    'episodes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Description of the location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'region',
              'short' => 'Region where the location is situated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'significance',
              'short' => 'Significance of the location in the series',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'location',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/locations',
                  'parts' => [
                    'locations',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/locations/{id}',
                  'parts' => [
                    'locations',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Allegiance of the organization',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Description of the organization',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the organization',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'leader',
              'short' => 'Leader of the organization',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the organization',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type or classification of the organization',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'organization',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/organizations',
                  'parts' => [
                    'organizations',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/organizations/{id}',
                  'parts' => [
                    'organizations',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'List of abilities possessed by the titan',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'allegiance',
              'short' => 'Allegiance of the titan or its inheritor',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'currentInheritor',
              'short' => 'Current inheritor of the titan',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'formerInheritors',
              'short' => 'List of former inheritors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'height',
              'short' => 'Height of the titan',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the titan',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the titan',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'titan',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/titans',
                  'parts' => [
                    'titans',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/titans/{id}',
                  'parts' => [
                    'titans',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
