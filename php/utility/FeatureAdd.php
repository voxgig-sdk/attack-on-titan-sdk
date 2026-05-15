<?php
declare(strict_types=1);

// AttackOnTitan SDK utility: feature_add

class AttackOnTitanFeatureAdd
{
    public static function call(AttackOnTitanContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
