# AttackOnTitan SDK utility: make_context
require_relative '../core/context'
module AttackOnTitanUtilities
  MakeContext = ->(ctxmap, basectx) {
    AttackOnTitanContext.new(ctxmap, basectx)
  }
end
