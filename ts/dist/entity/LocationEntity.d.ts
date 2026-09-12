import { AttackOnTitanEntityBase } from '../AttackOnTitanEntityBase';
import type { AttackOnTitanSDK } from '../AttackOnTitanSDK';
import type { Control } from '../types';
import type { Location, LocationLoadMatch, LocationListMatch } from '../AttackOnTitanTypes';
declare class LocationEntity extends AttackOnTitanEntityBase<Location> {
    constructor(client: AttackOnTitanSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    load(this: any, reqmatch?: LocationLoadMatch, ctrl?: Control): Promise<LocationEntity>;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
}
export { LocationEntity };
