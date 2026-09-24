# Attack on Titan API

A RESTful API that provides access to a wide range of data related to the popular anime and manga series &#39;Attack on Titan&#39;. Users can retrieve information about characters, episodes, locations, organizations, and titans, making it a valuable resource for fans and developers alike.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 5 entities and 10 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Character

Results: A list of characters; Character details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `affiliation`: Character&#39;s affiliation or allegiance
- `age`: Age of the character
- `gender`: Gender of the character
- `height`: Height of the character
- `id`: Unique identifier for the character

### Episode

Results: A list of episodes; Episode details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `airDate`: Air date of the episode
- `description`: Synopsis or description of the episode
- `episodeNumber`: Episode number within the season
- `id`: Unique identifier for the episode
- `season`: Season number

### Location

Results: A list of locations; Location details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `description`: Description of the location
- `id`: Unique identifier for the location
- `name`: Name of the location
- `region`: Region where the location is situated
- `significance`: Significance of the location in the series

### Organization

Results: A list of organizations; Organization details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `allegiance`: Allegiance of the organization
- `description`: Description of the organization
- `id`: Unique identifier for the organization
- `leader`: Leader of the organization
- `name`: Name of the organization

### Titan

Results: A list of titans; Titan details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `abilities`: List of abilities possessed by the titan
- `allegiance`: Allegiance of the titan or its inheritor
- `currentInheritor`: Current inheritor of the titan
- `formerInheritors`: List of former inheritors
- `height`: Height of the titan

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Character | `list` | `GET /characters` | See reference |
| Character | `load` | `GET /characters/{id}` | See reference |
| Episode | `list` | `GET /episodes` | See reference |
| Episode | `load` | `GET /episodes/{id}` | See reference |
| Location | `list` | `GET /locations` | See reference |
| Location | `load` | `GET /locations/{id}` | See reference |
| Organization | `list` | `GET /organizations` | See reference |
| Organization | `load` | `GET /organizations/{id}` | See reference |
| Titan | `list` | `GET /titans` | See reference |
| Titan | `load` | `GET /titans/{id}` | See reference |

## Connect to the API

- Production server: `https://api.attackontitanapi.com`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `attack-on-titan_list`: List records for an entity. Supported entities: `character`, `episode`, `location`, `organization`, `titan`.
- `attack-on-titan_load`: Load one record for an entity. Supported entities: `character`, `episode`, `location`, `organization`, `titan`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

