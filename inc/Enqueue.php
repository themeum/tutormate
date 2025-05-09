<?php
/**
 * Enqueue Script
 *
 * @package Tutormate
 */

namespace TUTORMATE;

/**
 * Enqueue styles & scripts
 */
class Enqueue {

	/**
	 * Register hooks
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function __construct() {
		// add_action( 'admin_enqueue_scripts', array( __CLASS__, 'load_admin_scripts' ) );
	}

	/**
	 * Load admin styles & scripts
	 *
	 * @since 1.0.0
	 *
	 * @param string $page The current admin page.
	 *
	 * @return void
	 */
	public static function load_admin_scripts( $page ): void {
		$tutormate_style = TUTORMATE_URL . 'assets/css/style.css';
		if ( 'tutormate-demo-import' === $page ) {
			wp_enqueue_style(
				'tutormate-style',
				$tutormate_style,
				array(),
				TUTORMATE_VERSION,
				'all'
			);
		}
	}
}
