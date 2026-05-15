<?php
declare(strict_types=1);

// AttackOnTitan SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AttackOnTitanFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AttackOnTitanBaseFeature();
            case "test":
                return new AttackOnTitanTestFeature();
            default:
                return new AttackOnTitanBaseFeature();
        }
    }
}
