import { AttackOnTitanEntityBase } from '../AttackOnTitanEntityBase';
import type { AttackOnTitanSDK } from '../AttackOnTitanSDK';
import type { Control } from '../types';
import type { Titan, TitanLoadMatch, TitanListMatch } from '../AttackOnTitanTypes';
declare class TitanEntity extends AttackOnTitanEntityBase<Titan> {
    constructor(client: AttackOnTitanSDK, entopts: any);
    make(this: TitanEntity): TitanEntity;
    load(this: any, reqmatch?: TitanLoadMatch, ctrl?: Control): Promise<TitanEntity>;
    list(this: any, reqmatch?: TitanListMatch, ctrl?: Control): Promise<TitanEntity[]>;
}
export { TitanEntity };
