# AttackOnTitan SDK exists test

require "minitest/autorun"
require_relative "../AttackOnTitan_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = AttackOnTitanSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
