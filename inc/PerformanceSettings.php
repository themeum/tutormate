<?php
/**
 * Handles registering options
 *
 * @package Tutormate
 */

namespace TUTORMATE;

use TUTORMATE\Performance;

defined( 'ABSPATH' ) || exit;

/**
 * Options class
 */
class PerformanceSettings {

	/**
	 * Register
	 */
	public function register() {
        add_action( 'init', array( $this, 'performance_optimization' ) );
        add_action( 'admin_init', array( $this, 'register_settings' ) );
		add_action( 'rest_api_init', array( $this, 'register_settings' ) );
	}

	/**
	 * Performance optimization
	 */
	public function performance_optimization() {

		// Get all the settings from database
		$opt_defer_js                = get_option( 'opt_defer_js', true );
		$opt_disable_rsd             = get_option( 'opt_disable_rsd', true );
		$opt_disable_emoji           = get_option( 'opt_disable_emoji', true );
		$opt_disable_xmlrpc          = get_option( 'opt_disable_xmlrpc', true );
		$opt_disable_embed           = get_option( 'opt_disable_embed', false );
		$opt_disable_feeds           = get_option( 'opt_disable_feeds', false );
		$opt_slow_heartbeat          = get_option( 'opt_slow_heartbeat', true );
		$opt_limit_revisions         = get_option( 'opt_limit_revisions', true );
		$opt_jquery_to_footer        = get_option( 'opt_jquery_to_footer', true );
		$opt_disable_comments        = get_option( 'opt_disable_comments', true );
		$opt_limit_comments_js       = get_option( 'opt_limit_comments_js', true );
		$opt_disable_shortlinks      = get_option( 'opt_disable_shortlinks', true );
		$opt_disable_wp_version      = get_option( 'opt_disable_wp_version', true );
		$opt_disable_wlwmanifest     = get_option( 'opt_disable_wlwmanifest', true );
		$opt_block_external_http     = get_option( 'opt_block_external_http', false );
		$opt_remove_comments_style   = get_option( 'opt_remove_comments_style', true );
		$opt_disable_jquery_migrate  = get_option( 'opt_disable_jquery_migrate', true );
		$opt_disable_version_numbers = get_option( 'opt_disable_version_numbers', true );

		$optimizations = array(
			'block_external_http'     => $opt_block_external_http ? true : false,
			'defer_js'                => $opt_defer_js ? true : false,
			'disable_comments'        => $opt_disable_comments ? true : false,
			'disable_embed'           => $opt_disable_embed ? true : false,
			'disable_emoji'           => $opt_disable_emoji ? true : false,
			'disable_feeds'           => $opt_disable_feeds ? true : false,
			'disable_jquery_migrate'  => $opt_disable_jquery_migrate ? true : false,
			'disable_rsd'             => $opt_disable_rsd ? true : false,
			'disable_shortlinks'      => $opt_disable_shortlinks ? true : false,
			'disable_version_numbers' => $opt_disable_version_numbers ? true : false,
			'disable_wlw_manifest'    => $opt_disable_wlwmanifest ? true : false,
			'disable_wp_version'      => $opt_disable_wp_version ? true : false,
			'disable_xmlrpc'          => $opt_disable_xmlrpc ? true : false,
			'jquery_to_footer'        => $opt_jquery_to_footer ? true : false,
			'limit_comments_js'       => $opt_limit_comments_js ? true : false,
			'limit_revisions'         => $opt_limit_revisions ? true : false,
			'remove_comments_style'   => $opt_remove_comments_style ? true : false,
			'slow_heartbeat'          => $opt_slow_heartbeat ? true : false,
		);

		$optimize = new Performance();
		$optimize->register( $optimizations );
    }
    
    /**
	 * Register settings
	 */
	public function register_settings() {

		register_setting(
			'performance_settings',
			'opt_block_external_http',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => false,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_defer_js',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_comments',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => false,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_embed',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => false,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_emoji',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_feeds',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => false,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_jquery_migrate',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_rsd',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_shortlinks',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_version_numbers',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_wlwmanifest',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_wp_version',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_disable_xmlrpc',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_jquery_to_footer',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_limit_comments_js',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_limit_revisions',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_remove_comments_style',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		register_setting(
			'performance_settings',
			'opt_slow_heartbeat',
			array(
				'type'              => 'boolean',
				'show_in_rest'      => true,
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
	}
}
