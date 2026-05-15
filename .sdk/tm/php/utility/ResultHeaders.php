<?php
declare(strict_types=1);

// AttackOnTitan SDK utility: result_headers

class AttackOnTitanResultHeaders
{
    public static function call(AttackOnTitanContext $ctx): ?AttackOnTitanResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
