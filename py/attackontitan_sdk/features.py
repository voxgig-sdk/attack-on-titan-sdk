# AttackOnTitan SDK feature factory

from attackontitan_sdk.feature.base_feature import AttackOnTitanBaseFeature
from attackontitan_sdk.feature.test_feature import AttackOnTitanTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AttackOnTitanBaseFeature(),
        "test": lambda: AttackOnTitanTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
