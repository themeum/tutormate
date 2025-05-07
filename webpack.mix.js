/*
 * Tutor Mate uses Laravel Mix
 *
 * Check the documentation at
 * https://laravel.com/docs/7.x/mix
 */

let mix = require('laravel-mix');

mix.webpackConfig({
	// externals: {
	// 	'react': 'React',
	// 	'react-dom': 'ReactDOM'
	// }
});

mix.setPublicPath('./assets');

// Compile assets
// mix.react('react/src/demo-importer.js', 'assets/js')
// .sass('react/src/sass/app.scss', 'assets/css/app.min.css')

// Add versioning to assets in production environment
if (mix.inProduction()) {
	mix.version();
}
