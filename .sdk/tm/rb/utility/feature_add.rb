# AttackOnTitan SDK utility: feature_add
module AttackOnTitanUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
