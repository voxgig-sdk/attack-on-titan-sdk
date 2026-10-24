# AttackOnTitan SDK utility: prepare_body
require_relative 'media'
module AttackOnTitanUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return AttackOnTitanUtilities.raw_body(ctx.reqdata) if AttackOnTitanUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
