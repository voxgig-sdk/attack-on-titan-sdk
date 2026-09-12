import { AttackOnTitanEntityBase } from '../AttackOnTitanEntityBase';
import type { AttackOnTitanSDK } from '../AttackOnTitanSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../AttackOnTitanTypes';
declare class CharacterEntity extends AttackOnTitanEntityBase<Character> {
    constructor(client: AttackOnTitanSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
