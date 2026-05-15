package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/attack-on-titan-sdk"
	"github.com/voxgig-sdk/attack-on-titan-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestTitanEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Titan(nil)
		if ent == nil {
			t.Fatal("expected non-nil TitanEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := titanBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "titan." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set ATTACKONTITAN_TEST_TITAN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		titanRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.titan", setup.data)))
		var titanRef01Data map[string]any
		if len(titanRef01DataRaw) > 0 {
			titanRef01Data = core.ToMapAny(titanRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = titanRef01Data

		// LIST
		titanRef01Ent := client.Titan(nil)
		titanRef01Match := map[string]any{}

		titanRef01ListResult, err := titanRef01Ent.List(titanRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, titanRef01ListOk := titanRef01ListResult.([]any)
		if !titanRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", titanRef01ListResult)
		}

		// LOAD
		titanRef01MatchDt0 := map[string]any{
			"id": titanRef01Data["id"],
		}
		titanRef01DataDt0Loaded, err := titanRef01Ent.Load(titanRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		titanRef01DataDt0LoadResult := core.ToMapAny(titanRef01DataDt0Loaded)
		if titanRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if titanRef01DataDt0LoadResult["id"] != titanRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func titanBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "titan", "TitanTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read titan test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse titan test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"titan01", "titan02", "titan03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("ATTACKONTITAN_TEST_TITAN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"ATTACKONTITAN_TEST_TITAN_ENTID": idmap,
		"ATTACKONTITAN_TEST_LIVE":      "FALSE",
		"ATTACKONTITAN_TEST_EXPLAIN":   "FALSE",
		"ATTACKONTITAN_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["ATTACKONTITAN_TEST_TITAN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["ATTACKONTITAN_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["ATTACKONTITAN_APIKEY"],
			},
			extra,
		})
		client = sdk.NewAttackOnTitanSDK(core.ToMapAny(mergedOpts))
	}

	live := env["ATTACKONTITAN_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["ATTACKONTITAN_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
