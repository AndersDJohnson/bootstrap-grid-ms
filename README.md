# Bootstrap Grid Micro-Small

[![Build Status](https://travis-ci.org/AndersDJohnson/bootstrap-grid-ms.svg)](https://travis-ci.org/AndersDJohnson/bootstrap-grid-ms)

The missing grid range in Bootstrap 3, below `sm`, from 480 to 767 pixels, redefining `xs` to less than 480 pixels.

## Demo

* https://andrz.me/bootstrap-grid-ms/test/index.html
* https://andrz.me/bootstrap-grid-ms/test/index-sass.html


## Install

```sh
bower install --save bootstrap-grid-ms
```


## Use

Use the `col-ms-*`, `hidden-ms`, `visible-ms`, and `visible-ms-*` classes, e.g.:

```html
<div class="col-ms-6">
  ...
</div>
```

Using LESS or SCSS/Sass, you can redefine the default Bootstrap breakpoints, and `bootstrap-grid-ms` will respect those.

### LESS

You will need Bootstrap LESS installed, e.g. via Bower:

```
bower install --save bootstrap
```

In your LESS, somewhere after importing Bootstrap, import the LESS file:

```less
@import "bower_components/bootstrap/less/bootstrap";
@import "bower_components/bootstrap-grid-ms/less/bootstrap-grid-ms";
```

### SCSS/Sass

You will need an SCSS/Sass version of Bootstrap, which is not included in this module's default Bower dependencies.

```
bower install --save bootstrap-sass
```

In your SCSS/Sass, somewhere after importing Bootstrap, import the SCSS file:

```scss
@import "bower_components/bootstrap-sass/assets/stylesheets/bootstrap";
@import "bower_components/bootstrap-grid-ms/scss/bootstrap-grid-ms";
```

### CSS

Or use the CSS file, somewhere after Bootstrap:

```css
@import "bower_components/bootstrap-grid-ms/dist/bootstrap-grid-ms.min.css";
```


## Credit

Originally taken from from: https://gist.github.com/wdollar/135ec3c80faaf5a821b0

Original notes:

> This is a hack to fill the gap between 480 and 767 pixels - a missing range
in the bootstrap responsive grid structure. Use these classes to style pages
on cellphones when they transition from portrait to landscape.

> Contains:
Columns, Offsets, Pushes, Pulls for the Mid-Small layout  
Visibility classes for the Mid-Small layout  
Redefined visibility classes for the Extra Small layout  

> See https://github.com/twbs/bootstrap/issues/10203 for more info.  
Forked from: https://gist.github.com/Jakobud/8eca95f07a3b50453cd7  
Original gist: https://gist.github.com/andyl/6360906  
