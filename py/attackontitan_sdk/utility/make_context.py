# AttackOnTitan SDK utility: make_context

from attackontitan_sdk.core.context import AttackOnTitanContext


def make_context_util(ctxmap, basectx):
    return AttackOnTitanContext(ctxmap, basectx)
