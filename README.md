# Paper CSS for happy printing

Recently, we say "front-end" everyday. Then why don't we make the printing documents in front-end? We believe we can make it perfectly without back-end. Paper CSS is just a small snippet of CSS, but it helps us create them in browser easily.

## Previewable

You can check the design and layout before printing. See the browser like when you build a webpage.

![Preview](images/preview.png)

[This example](examples/receipt.html) could be printed like this.

![Dialog](images/dialog.png)

## Live-reloading

It's just HTML/CSS, so we can edit it with live-reloading. See "Try" section below and [gulpfile.babel.js](gulpfile.babel.js) for more detail.

![Live reloading](images/live-reload.png)

## Installation

Get paper-css from npm:

```bash
$ npm install paper-css
```

## Usage

Load paper-css into `<head>` like this:

```html
<!-- Load paper.css for happy printing -->
<link rel="stylesheet" href="dist/paper.css">

<!-- Set page size here: A5, A4 or A3 -->
<!-- Set also "landscape" if you need -->
<style>@page { size: A5 }</style>
```

Set the class of `<body>` and set also "sheet" for each sheet.

```html
<!-- Set "A5", "A4" or "A3" for class name -->
<!-- Set also "landscape" if you need -->
<body class="A5">

  <!-- Each sheet element should have the class "sheet" -->
  <!-- "padding-**mm" is optional: you can set 10, 15, 20 or 25 -->
  <section class="sheet padding-10mm">

    <!-- Write HTML just like a web page -->
    <article>This is an A5 document.</article>

  </section>

</body>
```

See also [the examples](examples/) for detail.

## Try

Download or clone this repo, then execute the commands bellow:

```bash
$ cd to/this/repo
$ npm install
$ npm start
```

The browser will show the receipt example automatically. Edit the file `examples/receipt.html`, you'll find the preview on the browser be reloaded each time when you save it.

## Comparisons

type | expression | learning cost | editable | in-browser | multipage
:-- | :-- | :-- | :-- | :-- | :--
HTML | Enough | already known | No | OK | ~100 pages \*
SVG | Enough | not so difficult | No | OK |
PDF | Perfect | difficult | No | NG | no limit \*\*
Excel | Not cool | *sigh* | Yes | NG | uncontrollable

\* It depends on user's environment. \*\* Only if you have huge memory on the server.
