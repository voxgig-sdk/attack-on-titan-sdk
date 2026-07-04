<?php
declare(strict_types=1);

// Titan entity test

require_once __DIR__ . '/../attackontitan_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TitanEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = AttackOnTitanSDK::test(null, null);
        $ent = $testsdk->Titan(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = titan_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "titan." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set ATTACKONTITAN_TEST_TITAN_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $titan_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.titan")));
        $titan_ref01_data = null;
        if (count($titan_ref01_data_raw) > 0) {
            $titan_ref01_data = Helpers::to_map($titan_ref01_data_raw[0][1]);
        }

        // LIST
        $titan_ref01_ent = $client->Titan(null);
        $titan_ref01_match = [];

        $titan_ref01_list_result = $titan_ref01_ent->list($titan_ref01_match, null);
        $this->assertIsArray($titan_ref01_list_result);

        // LOAD
        $titan_ref01_match_dt0 = [
            "id" => $titan_ref01_data["id"],
        ];
        $titan_ref01_data_dt0_loaded = $titan_ref01_ent->load($titan_ref01_match_dt0, null);
        $titan_ref01_data_dt0_load_result = Helpers::to_map($titan_ref01_data_dt0_loaded);
        $this->assertNotNull($titan_ref01_data_dt0_load_result);
        $this->assertEquals($titan_ref01_data_dt0_load_result["id"], $titan_ref01_data["id"]);

    }
}

function titan_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/titan/TitanTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = AttackOnTitanSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["titan01", "titan02", "titan03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("ATTACKONTITAN_TEST_TITAN_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "ATTACKONTITAN_TEST_TITAN_ENTID" => $idmap,
        "ATTACKONTITAN_TEST_LIVE" => "FALSE",
        "ATTACKONTITAN_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["ATTACKONTITAN_TEST_TITAN_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["ATTACKONTITAN_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new AttackOnTitanSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["ATTACKONTITAN_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["ATTACKONTITAN_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
