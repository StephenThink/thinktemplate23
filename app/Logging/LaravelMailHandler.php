<?php

namespace App\Logging;

use Monolog\Handler\AbstractProcessingHandler;
use Illuminate\Support\Facades\Mail;
use Monolog\Logger;

class LaravelMailHandler extends AbstractProcessingHandler
{
    protected function write(array|\Monolog\LogRecord $record): void
    {
        $content = $record['formatted'];

        // Use Laravel's Mail facade with the default settings
        Mail::raw($content, function ($message) {
            $message->to(env('ADMIN_EMAIL', 'stephen@thinkcreative.uk'))
                    ->from(env('MAIL_FROM_ADDRESS', 'website@somewhere.com'))
                    ->subject('Error occurred in your Laravel application');
        });
    }
}
