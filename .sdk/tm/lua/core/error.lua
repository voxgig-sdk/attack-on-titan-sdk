-- AttackOnTitan SDK error

local json = require("dkjson")

local AttackOnTitanError = {}
AttackOnTitanError.__index = AttackOnTitanError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function AttackOnTitanError.new(code, msg, ctx)
  local self = setmetatable({}, AttackOnTitanError)
  self.is_sdk_error = true
  self.sdk = "AttackOnTitan"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function AttackOnTitanError:context()
  return CONTEXT[self]
end


function AttackOnTitanError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function AttackOnTitanError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function AttackOnTitanError:to_json()
  return json.encode(self:to_table())
end


function AttackOnTitanError:__tostring()
  return self.msg
end


function AttackOnTitanError.__tojson(self)
  return self:to_json()
end


return AttackOnTitanError
