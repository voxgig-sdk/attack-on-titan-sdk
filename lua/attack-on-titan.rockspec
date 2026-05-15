package = "voxgig-sdk-attack-on-titan"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/attack-on-titan-sdk.git"
}
description = {
  summary = "AttackOnTitan SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["attack-on-titan_sdk"] = "attack-on-titan_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
