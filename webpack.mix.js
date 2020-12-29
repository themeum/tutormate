/*
 * Tutor Mate uses Laravel Mix
 *
 * Check the documentation at
 * https://laravel.com/docs/7.x/mix
 */

let mix = require('laravel-mix');

// BrowserSync and LiveReload on `npm run watch` command
// Update the `proxy` and the location of your SSL Certificates if you're developing over HTTPS
mix.browserSync({
	proxy: 'http://tutorstarter.local',
	// https: {
	// 	key: '/your/certificates/location/your-local-domain.key',
	// 	cert: '/your/certificates/location/your-local-domain.crt'
	// },
	files: [
		'**/*.php',
		'assets/css/**/*.css',
		'assets/js/**/*.js'
	],
	injectChanges: true,
	open: false
});

mix.webpackConfig({
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	}
});

// Autloading jQuery to make it accessible to all the packages
// You can comment this line if you don't need jQuery
mix.autoload({
	jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.setPublicPath('./assets');

// Compile assets
mix.react('react/src/demo-importer.js', 'assets/js')

// Add versioning to assets in production environment
if (mix.inProduction()) {
	mix.version();
}
