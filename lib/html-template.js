import {version} from '../package.json'

export default function (size, landscape, padding) {
  return `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>${size}</title>

  <!-- Normalize or reset CSS with your favorite library -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">

  <!-- Load paper.css for happy printing -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/${version}/paper-css.css">

  <!-- Set page size here: A5, A4 or A3 -->
  <!-- Set also "landscape" if you need -->
  <style>@page { size: ${size}${landscape ? ' landscape' : ''} }</style>
</head>

<!-- Set "A5", "A4" or "A3" for class name -->
<!-- Set also "landscape" if you need -->
<body class="${size}${landscape ? ' landscape' : ''}">

  <!-- Each sheet element should have the class "sheet" -->
  <!-- "padding-**mm" is optional: you can set 10, 15, 20 or 25 -->
  <section class="sheet${padding === 'none' ? '' : ' padding-' + padding}">

    <!-- Write HTML just like a web page -->
    <article>Replace me.</article>

  </section>

</body>

</html>
`
}
