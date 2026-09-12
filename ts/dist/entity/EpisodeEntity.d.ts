import { AttackOnTitanEntityBase } from '../AttackOnTitanEntityBase';
import type { AttackOnTitanSDK } from '../AttackOnTitanSDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch, EpisodeListMatch } from '../AttackOnTitanTypes';
declare class EpisodeEntity extends AttackOnTitanEntityBase<Episode> {
    constructor(client: AttackOnTitanSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
