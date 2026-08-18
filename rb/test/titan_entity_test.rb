# Titan entity test

require "minitest/autorun"
require "json"
require_relative "../AttackOnTitan_sdk"
require_relative "runner"

class TitanEntityTest < Minitest::Test
  def test_create_instance
    testsdk = AttackOnTitanSDK.test(nil, nil)
    ent = testsdk.Titan(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "titan" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = AttackOnTitanSDK.test(seed, nil)
    seen = base.Titan(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = AttackOnTitanConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = AttackOnTitanSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Titan(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = titan_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "titan." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set ATTACK_ON_TITAN_TEST_TITAN_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    titan_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.titan")))
    titan_ref01_data = nil
    if titan_ref01_data_raw.length > 0
      titan_ref01_data = Helpers.to_map(titan_ref01_data_raw[0][1])
    end

    # LIST
    titan_ref01_ent = client.Titan(nil)
    titan_ref01_match = {}

    titan_ref01_list_result = titan_ref01_ent.list(titan_ref01_match, nil)
    assert titan_ref01_list_result.is_a?(Array)

    # LOAD
    titan_ref01_match_dt0 = {
      "id" => titan_ref01_data["id"],
    }
    titan_ref01_data_dt0_loaded = titan_ref01_ent.load(titan_ref01_match_dt0, nil)
    titan_ref01_data_dt0_load_result = Helpers.to_map(titan_ref01_data_dt0_loaded.respond_to?(:data_get) ? titan_ref01_data_dt0_loaded.data_get : titan_ref01_data_dt0_loaded)
    assert !titan_ref01_data_dt0_load_result.nil?
    assert_equal titan_ref01_data_dt0_load_result["id"], titan_ref01_data["id"]

  end
end

def titan_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "titan", "TitanTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = AttackOnTitanSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["titan01", "titan02", "titan03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["ATTACK_ON_TITAN_TEST_TITAN_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "ATTACK_ON_TITAN_TEST_TITAN_ENTID" => idmap,
    "ATTACK_ON_TITAN_TEST_LIVE" => "FALSE",
    "ATTACK_ON_TITAN_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["ATTACK_ON_TITAN_TEST_TITAN_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["ATTACK_ON_TITAN_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = AttackOnTitanSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["ATTACK_ON_TITAN_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["ATTACK_ON_TITAN_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
