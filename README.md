# AttackOnTitan SDK

Browse characters, episodes, locations, organizations, and titans from the Attack on Titan anime and manga

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Attack on Titan API

The Attack on Titan API is a free REST API providing data about the manga and anime series *Attack on Titan*. It is maintained by [Zach McMullen](https://www.attackontitanapi.com/) and served from `https://api.attackontitanapi.com`.

What you get from the API:

- `GET /characters` — characters from the series
- `GET /episodes` — anime episode listings
- `GET /locations` — places in the *Attack on Titan* world
- `GET /organizations` — factions and groups
- `GET /titans` — titans, including fields like name, height (metres), current inheritor, allegiance, and abilities
- `GET /` — index of available routes

The API requires no authentication. Authentication, rate limits, and licence terms are not documented on the project homepage, so treat usage as best-effort and check the project page before relying on it in production.

## Try it

**TypeScript**
```bash
npm install attack-on-titan
```

**Python**
```bash
pip install attack-on-titan-sdk
```

**PHP**
```bash
composer require voxgig/attack-on-titan-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/attack-on-titan-sdk/go
```

**Ruby**
```bash
gem install attack-on-titan-sdk
```

**Lua**
```bash
luarocks install attack-on-titan-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AttackOnTitanSDK } from 'attack-on-titan'

const client = new AttackOnTitanSDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o attack-on-titan-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "attack-on-titan": {
      "command": "/abs/path/to/attack-on-titan-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A character from the *Attack on Titan* series, served from `GET /characters`. | `/characters` |
| **Episode** | An anime episode entry, served from `GET /episodes`. | `/episodes` |
| **Location** | A place within the *Attack on Titan* world, served from `GET /locations`. | `/locations` |
| **Organization** | A faction or group from the series, served from `GET /organizations`. | `/organizations` |
| **Titan** | A titan with fields such as name, height (metres), current inheritor, allegiance, and abilities, served from `GET /titans`. | `/titans` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from attackontitan_sdk import AttackOnTitanSDK

client = AttackOnTitanSDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'attackontitan_sdk.php';

$client = new AttackOnTitanSDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/attack-on-titan-sdk/go"

client := sdk.NewAttackOnTitanSDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "AttackOnTitan_sdk"

client = AttackOnTitanSDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("attack-on-titan_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AttackOnTitanSDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AttackOnTitanSDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AttackOnTitanSDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AttackOnTitanSDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Attack on Titan API

- Upstream: [https://www.attackontitanapi.com/](https://www.attackontitanapi.com/)

---

Generated from the Attack on Titan API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
