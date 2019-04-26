const mix = require('laravel-mix');
require('laravel-mix-purgecss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').extract(['vue', 'lodash', 'axios', 'jquery'])
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/vendor.scss', 'public/css')
    .options({
        postCss: [
            require('postcss-css-variables')()
        ]
    })
    .purgeCss();

if (mix.inProduction()) {
    mix.version();
}