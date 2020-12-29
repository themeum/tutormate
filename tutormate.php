<?php
/**
 * Plugin Name: Tutor Mate
 * Plugin URI: https://www.themeum.com/tutormate
 * Description: Companion plugin for Tutor Starter theme.
 * Version: 1.0.0
 * Author: Themeum
 * Author URI: http://www.themeum.com
 * License: GPL3
 * License URI: http://www.gnu.org/licenses/gpl.html
 * Text Domain: tutormate
 */

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
		}
		else {
			// Set plugin constants.
			$this->set_plugin_constants();

			// Composer autoloader.
			require_once TUTORMATE_PATH . 'vendor/autoload.php';

			// Instantiate the main plugin class *Singleton*.
			$tutormate_demo_import = TUTORMATE\OneClickDemoImport::get_instance();

			// Register WP CLI commands
			if ( defined( 'WP_CLI' ) && WP_CLI ) {
				WP_CLI::add_command( 'tutormate list', array( 'TUTORMATE\WPCLICommands', 'list_predefined' ) );
				WP_CLI::add_command( 'tutormate import', array( 'TUTORMATE\WPCLICommands', 'import' ) );
			}
		}
	}

	/**
	 * Display an admin error notice when PHP is older the version 5.3.2.
	 * Hook it to the 'admin_notices' action.
	 */
	public function old_php_admin_error_notice() {
		$message = sprintf( esc_html__( 'The %2$sOne Click Demo Import%3$s plugin requires %2$sPHP 5.3.2+%3$s to run properly. Please contact your hosting company and ask them to update the PHP version of your site to at least PHP 5.3.2.%4$s Your current version of PHP: %2$s%1$s%3$s', 'tutormate' ), phpversion(), '<strong>', '</strong>', '<br>' );

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

// Instantiate the plugin class.
$tutormate_plugin = new TUTORMATE_Plugin();

// Require the demo importer class.
if ( class_exists( 'TUTORMATE\\DemoImport' ) ) {
	$demo_import = new TUTORMATE\DemoImport();
	$demo_import->register();
}
