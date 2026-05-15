-- AttackOnTitan SDK error

local AttackOnTitanError = {}
AttackOnTitanError.__index = AttackOnTitanError


function AttackOnTitanError.new(code, msg, ctx)
  local self = setmetatable({}, AttackOnTitanError)
  self.is_sdk_error = true
  self.sdk = "AttackOnTitan"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AttackOnTitanError:error()
  return self.msg
end


function AttackOnTitanError:__tostring()
  return self.msg
end


return AttackOnTitanError
