import { AttackOnTitanEntityBase } from '../AttackOnTitanEntityBase';
import type { AttackOnTitanSDK } from '../AttackOnTitanSDK';
import type { Control } from '../types';
import type { Organization, OrganizationLoadMatch, OrganizationListMatch } from '../AttackOnTitanTypes';
declare class OrganizationEntity extends AttackOnTitanEntityBase<Organization> {
    constructor(client: AttackOnTitanSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
    load(this: any, reqmatch?: OrganizationLoadMatch, ctrl?: Control): Promise<OrganizationEntity>;
    list(this: any, reqmatch?: OrganizationListMatch, ctrl?: Control): Promise<OrganizationEntity[]>;
}
export { OrganizationEntity };
