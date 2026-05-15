<?php
declare(strict_types=1);

// AttackOnTitan SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AttackOnTitanMakeContext
{
    public static function call(array $ctxmap, ?AttackOnTitanContext $basectx): AttackOnTitanContext
    {
        return new AttackOnTitanContext($ctxmap, $basectx);
    }
}
