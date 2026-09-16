package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *AttackOnTitanSDK, entopts map[string]any) AttackOnTitanEntity

var NewEpisodeEntityFunc func(client *AttackOnTitanSDK, entopts map[string]any) AttackOnTitanEntity

var NewLocationEntityFunc func(client *AttackOnTitanSDK, entopts map[string]any) AttackOnTitanEntity

var NewOrganizationEntityFunc func(client *AttackOnTitanSDK, entopts map[string]any) AttackOnTitanEntity

var NewTitanEntityFunc func(client *AttackOnTitanSDK, entopts map[string]any) AttackOnTitanEntity

