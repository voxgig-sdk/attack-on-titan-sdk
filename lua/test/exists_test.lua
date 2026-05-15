-- ProjectName SDK exists test

local sdk = require("attack-on-titan_sdk")

describe("AttackOnTitanSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
