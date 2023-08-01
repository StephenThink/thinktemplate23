<?php 

namespace App\Widgets;

use Statamic\Widgets\Widget;

class DownloadAssets extends Widget {

    public function html()
    {
        return view('widgets.download_asset');
    }

}