# Typed models for the AttackOnTitan SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Character(TypedDict, total=False):
    affiliation: str
    age: int
    gender: str
    height: str
    id: str
    name: str
    occupation: str
    species: str
    status: str


class CharacterLoadMatch(TypedDict):
    id: str


class CharacterListMatch(TypedDict, total=False):
    affiliation: str
    age: int
    gender: str
    height: str
    id: str
    name: str
    occupation: str
    species: str
    status: str


class Episode(TypedDict, total=False):
    air_date: str
    description: str
    episode_number: int
    id: str
    season: int
    title: str


class EpisodeLoadMatch(TypedDict):
    id: str


class EpisodeListMatch(TypedDict, total=False):
    air_date: str
    description: str
    episode_number: int
    id: str
    season: int
    title: str


class Location(TypedDict, total=False):
    description: str
    id: str
    name: str
    region: str
    significance: str


class LocationLoadMatch(TypedDict):
    id: str


class LocationListMatch(TypedDict, total=False):
    description: str
    id: str
    name: str
    region: str
    significance: str


class Organization(TypedDict, total=False):
    allegiance: str
    description: str
    id: str
    leader: str
    name: str
    type: str


class OrganizationLoadMatch(TypedDict):
    id: str


class OrganizationListMatch(TypedDict, total=False):
    allegiance: str
    description: str
    id: str
    leader: str
    name: str
    type: str


class Titan(TypedDict, total=False):
    ability: list
    allegiance: str
    current_inheritor: str
    former_inheritor: list
    height: str
    id: str
    name: str


class TitanLoadMatch(TypedDict):
    id: str


class TitanListMatch(TypedDict, total=False):
    ability: list
    allegiance: str
    current_inheritor: str
    former_inheritor: list
    height: str
    id: str
    name: str
