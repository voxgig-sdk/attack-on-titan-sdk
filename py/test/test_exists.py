# AttackOnTitan SDK exists test

import pytest
from attackontitan_sdk import AttackOnTitanSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AttackOnTitanSDK.test(None, None)
        assert testsdk is not None
