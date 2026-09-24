"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackOnTitanError = void 0;
class AttackOnTitanError extends Error {
    isAttackOnTitanError = true;
    sdk = 'AttackOnTitan';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.AttackOnTitanError = AttackOnTitanError;
//# sourceMappingURL=AttackOnTitanError.js.map