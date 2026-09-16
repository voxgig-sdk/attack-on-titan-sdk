# AttackOnTitan SDK feature factory

from attackontitan_sdk.feature.base_feature import AttackOnTitanBaseFeature
from attackontitan_sdk.feature.ratelimit_feature import AttackOnTitanRatelimitFeature
from attackontitan_sdk.feature.retry_feature import AttackOnTitanRetryFeature
from attackontitan_sdk.feature.test_feature import AttackOnTitanTestFeature
from attackontitan_sdk.feature.timeout_feature import AttackOnTitanTimeoutFeature


_FEATURES = {
    "base": lambda: AttackOnTitanBaseFeature(),
    "ratelimit": lambda: AttackOnTitanRatelimitFeature(),
    "retry": lambda: AttackOnTitanRetryFeature(),
    "test": lambda: AttackOnTitanTestFeature(),
    "timeout": lambda: AttackOnTitanTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
