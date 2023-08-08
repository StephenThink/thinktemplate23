<?php

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class StarterKitPostInstall
{
    public function handle($console)
    {
        if ($console->confirm('Do you want to init a git repo and configure gitignore?', true)) {
            $process = new Process(['git', 'init']);
            try {
                $process->mustRun();
                $console->info('Repo initialised.');
            } catch (ProcessFailedException $exception) {
                $console->info($exception->getMessage());
            }

            if ($console->confirm('Do you want to exclude the `public/build` folder from git?', true)) {
                app('files')->append(base_path('.gitignore'), "\n/public/build/");
            }

            if ($console->confirm('Do you want to exclude the `users` folder from git?', false)) {
                app('files')->append(base_path('.gitignore'), "\n/users");
            }

            if ($console->confirm('Do you want to exclude the `storage/form` folder from git?', false)) {
                app('files')->append(base_path('.gitignore'), "\n/storage/forms");
            }
        }

        if ($console->confirm('Do you want to install npm dependencies?', true)) {
            $process = new Process(['npm', 'i']);
            try {
                $process->mustRun();
                $console->info('Dependencies installed.');

                if ($console->confirm('Do you want to run npm build?', true)) {
                    // Run npm run build
                    $buildProcess = new Process(['npm', 'run', 'build']);
                    try {
                        $buildProcess->mustRun();
                        $console->info('Build successful.');
                    } catch (ProcessFailedException $exception) {
                        $console->error('Build failed: ' . $exception->getMessage());
                    }
                }

            } catch (ProcessFailedException $exception) {
                $console->info($exception->getMessage());
            }
        }

//        if ($console->confirm('Do you want to install missing Laravel translation files using the Laravel Lang package?', true)) {
//            $process = new Process(['composer', 'require', 'laravel-lang/common', '--dev']);
//            try {
//                $process->mustRun();
//                $console->info('Laravel Lang installed.');
//            } catch (ProcessFailedException $exception) {
//                $console->info($exception->getMessage());
//            }
//
//            $console->info('Enter the handles of the languages you want to install. Press enter when you\'re done.');
//            do {
//                if ($handle = $console->ask('Handle of language (e.g. "nl")')) {
//                    $process = new Process(['php', 'artisan', 'lang:add', $handle]);
//                    try {
//                        $process->mustRun();
//                        $console->info("Language \"{$handle}\" installed.");
//                    } catch (ProcessFailedException $exception) {
//                        $console->info($exception->getMessage());
//                    }
//                }
//            } while ($handle !== null);
//        }

//        if ($console->confirm('Would you like to star the Peak repo?', false)) {
//            if (PHP_OS_FAMILY == 'Darwin') {
//                exec('open https://github.com/studio1902/statamic-peak');
//            }
//            if (PHP_OS_FAMILY == 'Windows') {
//                exec('start https://github.com/studio1902/statamic-peak');
//            }
//            if (PHP_OS_FAMILY == 'Linux') {
//                exec('xdg-open https://github.com/studio1902/statamic-peak');
//            }
//
//            $console->info('Thank you!');
//        }

        $console->info('<info>[✓]</info> Finished Installing!');

    }
}
