<?php
declare(strict_types=1);

// AttackOnTitan SDK exists test

require_once __DIR__ . '/../attackontitan_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AttackOnTitanSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
