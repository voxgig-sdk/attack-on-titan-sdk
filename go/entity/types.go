// Typed models for the AttackOnTitan SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/attack-on-titan-sdk/go/core"
)

// Character is the typed data model for the character entity.
type Character struct {
	Affiliation *string `json:"affiliation,omitempty"`
	Age *int `json:"age,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Height *string `json:"height,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Occupation *string `json:"occupation,omitempty"`
	Species *string `json:"species,omitempty"`
	Status *string `json:"status,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id string `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Affiliation *string `json:"affiliation,omitempty"`
	Age *int `json:"age,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Height *string `json:"height,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Occupation *string `json:"occupation,omitempty"`
	Species *string `json:"species,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
	AirDate *string `json:"airDate,omitempty"`
	Description *string `json:"description,omitempty"`
	EpisodeNumber *int `json:"episodeNumber,omitempty"`
	Id *string `json:"id,omitempty"`
	Season *int `json:"season,omitempty"`
	Title *string `json:"title,omitempty"`
}

// EpisodeLoadMatch is the typed request payload for Episode.LoadTyped.
type EpisodeLoadMatch struct {
	Id string `json:"id"`
}

// EpisodeListMatch is the typed request payload for Episode.ListTyped.
type EpisodeListMatch struct {
	AirDate *string `json:"airDate,omitempty"`
	Description *string `json:"description,omitempty"`
	EpisodeNumber *int `json:"episodeNumber,omitempty"`
	Id *string `json:"id,omitempty"`
	Season *int `json:"season,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
	Significance *string `json:"significance,omitempty"`
}

// LocationLoadMatch is the typed request payload for Location.LoadTyped.
type LocationLoadMatch struct {
	Id string `json:"id"`
}

// LocationListMatch is the typed request payload for Location.ListTyped.
type LocationListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
	Significance *string `json:"significance,omitempty"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
	Allegiance *string `json:"allegiance,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Leader *string `json:"leader,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// OrganizationLoadMatch is the typed request payload for Organization.LoadTyped.
type OrganizationLoadMatch struct {
	Id string `json:"id"`
}

// OrganizationListMatch is the typed request payload for Organization.ListTyped.
type OrganizationListMatch struct {
	Allegiance *string `json:"allegiance,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Leader *string `json:"leader,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Titan is the typed data model for the titan entity.
type Titan struct {
	Abilities *[]any `json:"abilities,omitempty"`
	Allegiance *string `json:"allegiance,omitempty"`
	CurrentInheritor *string `json:"currentInheritor,omitempty"`
	FormerInheritors *[]any `json:"formerInheritors,omitempty"`
	Height *string `json:"height,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// TitanLoadMatch is the typed request payload for Titan.LoadTyped.
type TitanLoadMatch struct {
	Id string `json:"id"`
}

// TitanListMatch is the typed request payload for Titan.ListTyped.
type TitanListMatch struct {
	Abilities *[]any `json:"abilities,omitempty"`
	Allegiance *string `json:"allegiance,omitempty"`
	CurrentInheritor *string `json:"currentInheritor,omitempty"`
	FormerInheritors *[]any `json:"formerInheritors,omitempty"`
	Height *string `json:"height,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
