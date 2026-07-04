# Typed models for the AttackOnTitan SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    affiliation: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None
    height: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    occupation: Optional[str] = None
    species: Optional[str] = None
    status: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: str


@dataclass
class CharacterListMatch:
    affiliation: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None
    height: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    occupation: Optional[str] = None
    species: Optional[str] = None
    status: Optional[str] = None


@dataclass
class Episode:
    air_date: Optional[str] = None
    description: Optional[str] = None
    episode_number: Optional[int] = None
    id: Optional[str] = None
    season: Optional[int] = None
    title: Optional[str] = None


@dataclass
class EpisodeLoadMatch:
    id: str


@dataclass
class EpisodeListMatch:
    air_date: Optional[str] = None
    description: Optional[str] = None
    episode_number: Optional[int] = None
    id: Optional[str] = None
    season: Optional[int] = None
    title: Optional[str] = None


@dataclass
class Location:
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None
    significance: Optional[str] = None


@dataclass
class LocationLoadMatch:
    id: str


@dataclass
class LocationListMatch:
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None
    significance: Optional[str] = None


@dataclass
class Organization:
    allegiance: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    leader: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None


@dataclass
class OrganizationLoadMatch:
    id: str


@dataclass
class OrganizationListMatch:
    allegiance: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    leader: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Titan:
    ability: Optional[list] = None
    allegiance: Optional[str] = None
    current_inheritor: Optional[str] = None
    former_inheritor: Optional[list] = None
    height: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None


@dataclass
class TitanLoadMatch:
    id: str


@dataclass
class TitanListMatch:
    ability: Optional[list] = None
    allegiance: Optional[str] = None
    current_inheritor: Optional[str] = None
    former_inheritor: Optional[list] = None
    height: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None

