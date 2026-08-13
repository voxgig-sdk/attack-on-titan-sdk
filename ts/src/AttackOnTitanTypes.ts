// Typed models for the AttackOnTitan SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  affiliation?: string
  age?: number
  gender?: string
  height?: string
  id?: string
  name?: string
  occupation?: string
  species?: string
  status?: string
}

export interface CharacterLoadMatch {
  id: string
}

export interface CharacterListMatch {
  affiliation?: string
  age?: number
  gender?: string
  height?: string
  id?: string
  name?: string
  occupation?: string
  species?: string
  status?: string
}

export interface Episode {
  airDate?: string
  description?: string
  episodeNumber?: number
  id?: string
  season?: number
  title?: string
}

export interface EpisodeLoadMatch {
  id: string
}

export interface EpisodeListMatch {
  airDate?: string
  description?: string
  episodeNumber?: number
  id?: string
  season?: number
  title?: string
}

export interface Location {
  description?: string
  id?: string
  name?: string
  region?: string
  significance?: string
}

export interface LocationLoadMatch {
  id: string
}

export interface LocationListMatch {
  description?: string
  id?: string
  name?: string
  region?: string
  significance?: string
}

export interface Organization {
  allegiance?: string
  description?: string
  id?: string
  leader?: string
  name?: string
  type?: string
}

export interface OrganizationLoadMatch {
  id: string
}

export interface OrganizationListMatch {
  allegiance?: string
  description?: string
  id?: string
  leader?: string
  name?: string
  type?: string
}

export interface Titan {
  abilities?: any[]
  allegiance?: string
  currentInheritor?: string
  formerInheritors?: any[]
  height?: string
  id?: string
  name?: string
}

export interface TitanLoadMatch {
  id: string
}

export interface TitanListMatch {
  abilities?: any[]
  allegiance?: string
  currentInheritor?: string
  formerInheritors?: any[]
  height?: string
  id?: string
  name?: string
}

