
import { Context } from './Context'


class AttackOnTitanError extends Error {

  isAttackOnTitanError = true

  sdk = 'AttackOnTitan'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AttackOnTitanError
}

