# frozen_string_literal: true

# Typed models for the AttackOnTitan SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] occupation
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Character = Struct.new(
  :affiliation,
  :age,
  :gender,
  :height,
  :id,
  :name,
  :occupation,
  :species,
  :status,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [String]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] occupation
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :affiliation,
  :age,
  :gender,
  :height,
  :id,
  :name,
  :occupation,
  :species,
  :status,
  keyword_init: true
)

# Episode entity data model.
#
# @!attribute [rw] airDate
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] episodeNumber
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Episode = Struct.new(
  :airDate,
  :description,
  :episodeNumber,
  :id,
  :season,
  :title,
  keyword_init: true
)

# Request payload for Episode#load.
#
# @!attribute [rw] id
#   @return [String]
EpisodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Episode#list.
#
# @!attribute [rw] airDate
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] episodeNumber
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
EpisodeListMatch = Struct.new(
  :airDate,
  :description,
  :episodeNumber,
  :id,
  :season,
  :title,
  keyword_init: true
)

# Location entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] significance
#   @return [String, nil]
Location = Struct.new(
  :description,
  :id,
  :name,
  :region,
  :significance,
  keyword_init: true
)

# Request payload for Location#load.
#
# @!attribute [rw] id
#   @return [String]
LocationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Location#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] significance
#   @return [String, nil]
LocationListMatch = Struct.new(
  :description,
  :id,
  :name,
  :region,
  :significance,
  keyword_init: true
)

# Organization entity data model.
#
# @!attribute [rw] allegiance
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] leader
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Organization = Struct.new(
  :allegiance,
  :description,
  :id,
  :leader,
  :name,
  :type,
  keyword_init: true
)

# Request payload for Organization#load.
#
# @!attribute [rw] id
#   @return [String]
OrganizationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Organization#list.
#
# @!attribute [rw] allegiance
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] leader
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
OrganizationListMatch = Struct.new(
  :allegiance,
  :description,
  :id,
  :leader,
  :name,
  :type,
  keyword_init: true
)

# Titan entity data model.
#
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] allegiance
#   @return [String, nil]
#
# @!attribute [rw] currentInheritor
#   @return [String, nil]
#
# @!attribute [rw] formerInheritors
#   @return [Array, nil]
#
# @!attribute [rw] height
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Titan = Struct.new(
  :abilities,
  :allegiance,
  :currentInheritor,
  :formerInheritors,
  :height,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Titan#load.
#
# @!attribute [rw] id
#   @return [String]
TitanLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Titan#list.
#
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] allegiance
#   @return [String, nil]
#
# @!attribute [rw] currentInheritor
#   @return [String, nil]
#
# @!attribute [rw] formerInheritors
#   @return [Array, nil]
#
# @!attribute [rw] height
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
TitanListMatch = Struct.new(
  :abilities,
  :allegiance,
  :currentInheritor,
  :formerInheritors,
  :height,
  :id,
  :name,
  keyword_init: true
)

