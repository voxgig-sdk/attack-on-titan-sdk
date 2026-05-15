<?php
declare(strict_types=1);

// AttackOnTitan SDK utility: result_body

class AttackOnTitanResultBody
{
    public static function call(AttackOnTitanContext $ctx): ?AttackOnTitanResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
