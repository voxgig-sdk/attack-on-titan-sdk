<?php
declare(strict_types=1);

// AttackOnTitan SDK utility: feature_hook

class AttackOnTitanFeatureHook
{
    public static function call(AttackOnTitanContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
