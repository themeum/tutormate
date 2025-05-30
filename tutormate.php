<?php
/**
 * Plugin Name: TutorMate
 * Description: Companion demo importer plugin for TutorStarter theme.
 * Version: 3.0.1
 * Author: Themeum
 * Author URI: https://www.themeum.com
 * Tags: demo, import, content, data
 * Requires at least: 5.3
 * Tested up to: 6.7
 * Requires PHP: 7.0
 * License: GNU General Public License v3 or later
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: tutormate
 * Domain Path: /languages
 *
 * @package tutormate
 */

use TUTORMATE\DemoImporter;
use TUTORMATE\Enqueue;

defined( 'ABSPATH' ) || exit;

/**
 * Main plugin class with initialization tasks.
 */
class TUTORMATE_Plugin {

	/**
	 * Constructor for this class.
	 */
	public function __construct() {

		/**
		 * Display admin error message if PHP version is older than 5.3.2.
		 * Otherwise execute the main plugin class.
		 */
		if ( version_compare( phpversion(), '5.3.2', '<' ) ) {
			add_action( 'admin_notices', array( $this, 'old_php_admin_error_notice' ) );
		} else {
			// Set plugin constants.
			$this->set_plugin_constants();

			// Composer autoloader.
			require_once TUTORMATE_PATH . 'vendor/autoload.php';

			new DemoImporter();
			new Enqueue();

		}
	}

	/**
	 * Display an admin error notice when PHP is older the version 5.3.2.
	 * Hook it to the 'admin_notices' action.
	 */
	public function old_php_admin_error_notice() {
		$message = sprintf(
			esc_html__(
				'The %2$sTutormate%3$s plugin requires %2$sPHP 5.3.2+%3$s to run properly. Please contact your hosting company and ask them to update the PHP version of your site to at least PHP 5.3.2.%4$s Your current version of PHP: %2$s%1$s%3$s',
				'tutormate'
			), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			phpversion(),
			'<strong>',
			'</strong>',
			'<br>'
		);
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		printf( '<div class="notice notice-error"><p>%1$s</p></div>', wp_kses_post( $message ) );
	}

	/**
	 * Set plugin constants.
	 *
	 * Path/URL to root of this plugin, with trailing slash and plugin version.
	 */
	private function set_plugin_constants() {
		// Path/URL to root of this plugin, with trailing slash.
		if ( ! defined( 'TUTORMATE_PATH' ) ) {
			define( 'TUTORMATE_PATH', plugin_dir_path( __FILE__ ) );
		}
		if ( ! defined( 'TUTORMATE_URL' ) ) {
			define( 'TUTORMATE_URL', plugin_dir_url( __FILE__ ) );
		}

		// Action hook to set the plugin version constant.
		add_action( 'admin_init', array( $this, 'set_plugin_version_constant' ) );
	}

	/**
	 * Set plugin version constant -> TUTORMATE_VERSION.
	 */
	public function set_plugin_version_constant() {
		if ( ! defined( 'TUTORMATE_VERSION' ) ) {
			$plugin_data = get_plugin_data( __FILE__ );
			define( 'TUTORMATE_VERSION', $plugin_data['Version'] );
		}
	}
}

// Check if TutorStarter is active.
$theme = wp_get_theme();

if ( 'tutorstarter' === $theme->get( 'TextDomain' ) ) :
	// Instantiate the plugin class.
	$tutormate_plugin = new TUTORMATE_Plugin();
endif;
