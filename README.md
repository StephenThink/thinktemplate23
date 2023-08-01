<p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo+Wordmark-Rad.svg" width="400" alt="Statamic Logo" /></p>

## About Statamic

Statamic is the flat-first, Laravel + Git powered CMS designed for building beautiful, easy to manage websites.

> **Note:** This repository contains the code for the Statamic application. To contribute to the core package, visit the [Statamic core package repository][cms-repo].


## Learning Statamic

Statamic has extensive [documentation][docs]. We dedicate a significant amount of time and energy every day to improving them, so if something is unclear, feel free to open issues for anything you find confusing or incomplete. We are happy to consider anything you feel will make the docs and CMS better.

## Support

We provide official developer support on [Statamic Pro](https://statamic.com/pricing) projects. Community-driven support is available on the [forum](https://statamic.com/forum) and in [Discord][discord].


## Contributing

Thank you for considering contributing to Statamic! We simply ask that you review the [contribution guide][contribution] before you open issues or send pull requests.


## Code of Conduct

In order to ensure that the Statamic community is welcoming to all and generally a rad place to belong, please review and abide by the [Code of Conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).


## Important Links

- [Statamic Main Site](https://statamic.com)
- [Statamic Documentation][docs]
- [Statamic Core Package Repo][cms-repo]
- [Statamic Migrator](https://github.com/statamic/migrator)
- [Statamic Discord][discord]

[docs]: https://statamic.dev/
[discord]: https://statamic.com/discord
[contribution]: https://github.com/statamic/cms/blob/master/CONTRIBUTING.md
[cms-repo]: https://github.com/statamic/cms

Statamic Pdf Thumbnailer

    Statamic Pdf Thumbnailer automatically generates an image per uploaded PDF asset.

    Particularly useful when you want to show image previews when linking to PDF files.

Features

    Generates an image asset of the first page for every uploaded PDF
    The uploaded PDF contains a relation to the image asset
    Includes a page number selector, when an image preview other than the first page is needed
    Includes a simple tag to show the image previews in your antlers templates

Requirements

You should have Imagick and Ghostscript installed. See issues regarding Ghostscript on the underlying Spatie package page.
How to Install

You can search for this addon in the Tools > Addons section of the Statamic control panel and click install, or run the following command from your project root:

composer require insight-media/statamic-pdf-thumbnailer

How to Use
In your antlers templates

For example, if you have an Assets fieldtype named 'catalogs', containing some Pdf's:

{{ catalogs }}

    <a href="{{ url }}">
        <img src="{{ pdf to=thumbnail }}">

        <!-- or when using glide: -->
        <img src="{{ glide src=thumbnail width='200' }}">
    </a>

{{ /catalogs }}


Widget: Continue Editing
Price
Free
Seller
stoffeliostoffelio
Downloads
10030

This widget lists the last edited entries in the control panel so you can jump right back into work.
Requirements

    Statamic v3

Installation

From your site folder, run composer require webographen/statamic-widget-continue-editing - or install it via the control panel.
Usage

To add the widget to your control panel dashboard, edit the config under config/statamic/cp.php and add the following entry to the widgets array:

[
'type' => 'continue_editing',
'width' => 100,
],

Optional Parameters

By default the widget display the last five entries across all collections. You can modify this by adding two more parameters:

[
'type' => 'continue_editing',
'width' => 100,
'collections' => '*',
'limit' => 5
],

Collections: One or more piped collections to display - e.g. 'pages', 'pages|posts', or '*' (any) for the default behavior

Limit: The maximum number of entries as an integer
