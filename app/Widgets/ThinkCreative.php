<?php

namespace App\Widgets;

use Statamic\Widgets\Widget;

class ThinkCreative extends Widget
{
    /**
     * The HTML that should be shown in the widget.
     *
     * @return \Illuminate\View\View
     */
    public function html()
    {
        return view('widgets.think');
    }
}
