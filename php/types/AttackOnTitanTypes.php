<?php
declare(strict_types=1);

// Typed models for the AttackOnTitan SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?string $affiliation = null;
    public ?int $age = null;
    public ?string $gender = null;
    public ?string $height = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $occupation = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public string $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $affiliation = null;
    public ?int $age = null;
    public ?string $gender = null;
    public ?string $height = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $occupation = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** Episode entity data model. */
class Episode
{
    public ?string $air_date = null;
    public ?string $description = null;
    public ?int $episode_number = null;
    public ?string $id = null;
    public ?int $season = null;
    public ?string $title = null;
}

/** Request payload for Episode#load. */
class EpisodeLoadMatch
{
    public string $id;
}

/** Request payload for Episode#list. */
class EpisodeListMatch
{
    public ?string $air_date = null;
    public ?string $description = null;
    public ?int $episode_number = null;
    public ?string $id = null;
    public ?int $season = null;
    public ?string $title = null;
}

/** Location entity data model. */
class Location
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $region = null;
    public ?string $significance = null;
}

/** Request payload for Location#load. */
class LocationLoadMatch
{
    public string $id;
}

/** Request payload for Location#list. */
class LocationListMatch
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $region = null;
    public ?string $significance = null;
}

/** Organization entity data model. */
class Organization
{
    public ?string $allegiance = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $leader = null;
    public ?string $name = null;
    public ?string $type = null;
}

/** Request payload for Organization#load. */
class OrganizationLoadMatch
{
    public string $id;
}

/** Request payload for Organization#list. */
class OrganizationListMatch
{
    public ?string $allegiance = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $leader = null;
    public ?string $name = null;
    public ?string $type = null;
}

/** Titan entity data model. */
class Titan
{
    public ?array $ability = null;
    public ?string $allegiance = null;
    public ?string $current_inheritor = null;
    public ?array $former_inheritor = null;
    public ?string $height = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for Titan#load. */
class TitanLoadMatch
{
    public string $id;
}

/** Request payload for Titan#list. */
class TitanListMatch
{
    public ?array $ability = null;
    public ?string $allegiance = null;
    public ?string $current_inheritor = null;
    public ?array $former_inheritor = null;
    public ?string $height = null;
    public ?string $id = null;
    public ?string $name = null;
}

