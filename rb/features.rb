# AttackOnTitan SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AttackOnTitanFeatures
  def self.make_feature(name)
    case name
    when "base"
      AttackOnTitanBaseFeature.new
    when "test"
      AttackOnTitanTestFeature.new
    else
      AttackOnTitanBaseFeature.new
    end
  end
end
