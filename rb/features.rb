# AttackOnTitan SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AttackOnTitanFeatures
  def self.make_feature(name)
    case name
    when "base"
      AttackOnTitanBaseFeature.new
    when "ratelimit"
      AttackOnTitanRatelimitFeature.new
    when "retry"
      AttackOnTitanRetryFeature.new
    when "test"
      AttackOnTitanTestFeature.new
    when "timeout"
      AttackOnTitanTimeoutFeature.new
    else
      AttackOnTitanBaseFeature.new
    end
  end
end
