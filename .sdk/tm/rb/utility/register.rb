# AttackOnTitan SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AttackOnTitanUtility.registrar = ->(u) {
  u.clean = AttackOnTitanUtilities::Clean
  u.done = AttackOnTitanUtilities::Done
  u.make_error = AttackOnTitanUtilities::MakeError
  u.feature_add = AttackOnTitanUtilities::FeatureAdd
  u.feature_hook = AttackOnTitanUtilities::FeatureHook
  u.feature_init = AttackOnTitanUtilities::FeatureInit
  u.fetcher = AttackOnTitanUtilities::Fetcher
  u.make_fetch_def = AttackOnTitanUtilities::MakeFetchDef
  u.make_context = AttackOnTitanUtilities::MakeContext
  u.make_options = AttackOnTitanUtilities::MakeOptions
  u.make_request = AttackOnTitanUtilities::MakeRequest
  u.make_response = AttackOnTitanUtilities::MakeResponse
  u.make_result = AttackOnTitanUtilities::MakeResult
  u.make_point = AttackOnTitanUtilities::MakePoint
  u.make_spec = AttackOnTitanUtilities::MakeSpec
  u.make_url = AttackOnTitanUtilities::MakeUrl
  u.param = AttackOnTitanUtilities::Param
  u.prepare_auth = AttackOnTitanUtilities::PrepareAuth
  u.prepare_body = AttackOnTitanUtilities::PrepareBody
  u.prepare_headers = AttackOnTitanUtilities::PrepareHeaders
  u.prepare_method = AttackOnTitanUtilities::PrepareMethod
  u.prepare_params = AttackOnTitanUtilities::PrepareParams
  u.prepare_path = AttackOnTitanUtilities::PreparePath
  u.prepare_query = AttackOnTitanUtilities::PrepareQuery
  u.graphql_body = AttackOnTitanUtilities::GraphqlBody
  u.graphql_errors = AttackOnTitanUtilities::GraphqlErrors
  u.result_basic = AttackOnTitanUtilities::ResultBasic
  u.result_body = AttackOnTitanUtilities::ResultBody
  u.result_headers = AttackOnTitanUtilities::ResultHeaders
  u.transform_request = AttackOnTitanUtilities::TransformRequest
  u.transform_response = AttackOnTitanUtilities::TransformResponse
}
