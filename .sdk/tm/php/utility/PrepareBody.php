<?php
declare(strict_types=1);

// AttackOnTitan SDK utility: prepare_body

class AttackOnTitanPrepareBody
{
    public static function call(AttackOnTitanContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
