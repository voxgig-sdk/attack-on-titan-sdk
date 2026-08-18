package voxgigattackontitansdk

import (
	"github.com/voxgig-sdk/attack-on-titan-sdk/go/core"
	"github.com/voxgig-sdk/attack-on-titan-sdk/go/entity"
	"github.com/voxgig-sdk/attack-on-titan-sdk/go/feature"
	_ "github.com/voxgig-sdk/attack-on-titan-sdk/go/utility"
)

// Type aliases preserve external API.
type AttackOnTitanSDK = core.AttackOnTitanSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AttackOnTitanEntity = core.AttackOnTitanEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AttackOnTitanError = core.AttackOnTitanError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.AttackOnTitanSDK, entopts map[string]any) core.AttackOnTitanEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewEpisodeEntityFunc = func(client *core.AttackOnTitanSDK, entopts map[string]any) core.AttackOnTitanEntity {
		return entity.NewEpisodeEntity(client, entopts)
	}
	core.NewLocationEntityFunc = func(client *core.AttackOnTitanSDK, entopts map[string]any) core.AttackOnTitanEntity {
		return entity.NewLocationEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.AttackOnTitanSDK, entopts map[string]any) core.AttackOnTitanEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewTitanEntityFunc = func(client *core.AttackOnTitanSDK, entopts map[string]any) core.AttackOnTitanEntity {
		return entity.NewTitanEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAttackOnTitanSDK = core.NewAttackOnTitanSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewAttackOnTitanSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *AttackOnTitanSDK  { return NewAttackOnTitanSDK(nil) }
func Test() *AttackOnTitanSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
