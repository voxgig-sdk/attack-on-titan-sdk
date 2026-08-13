-- Typed models for the AttackOnTitan SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field affiliation? string
---@field age? number
---@field gender? string
---@field height? string
---@field id? string
---@field name? string
---@field occupation? string
---@field species? string
---@field status? string

---@class CharacterLoadMatch
---@field id string

---@class CharacterListMatch
---@field affiliation? string
---@field age? number
---@field gender? string
---@field height? string
---@field id? string
---@field name? string
---@field occupation? string
---@field species? string
---@field status? string

---@class Episode
---@field airDate? string
---@field description? string
---@field episodeNumber? number
---@field id? string
---@field season? number
---@field title? string

---@class EpisodeLoadMatch
---@field id string

---@class EpisodeListMatch
---@field airDate? string
---@field description? string
---@field episodeNumber? number
---@field id? string
---@field season? number
---@field title? string

---@class Location
---@field description? string
---@field id? string
---@field name? string
---@field region? string
---@field significance? string

---@class LocationLoadMatch
---@field id string

---@class LocationListMatch
---@field description? string
---@field id? string
---@field name? string
---@field region? string
---@field significance? string

---@class Organization
---@field allegiance? string
---@field description? string
---@field id? string
---@field leader? string
---@field name? string
---@field type? string

---@class OrganizationLoadMatch
---@field id string

---@class OrganizationListMatch
---@field allegiance? string
---@field description? string
---@field id? string
---@field leader? string
---@field name? string
---@field type? string

---@class Titan
---@field abilities? table
---@field allegiance? string
---@field currentInheritor? string
---@field formerInheritors? table
---@field height? string
---@field id? string
---@field name? string

---@class TitanLoadMatch
---@field id string

---@class TitanListMatch
---@field abilities? table
---@field allegiance? string
---@field currentInheritor? string
---@field formerInheritors? table
---@field height? string
---@field id? string
---@field name? string

local M = {}

return M
