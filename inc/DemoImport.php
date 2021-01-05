<?php
/**
 * Handles fetching all demos from API
 *
 * @package Tutormate
 */

namespace TUTORMATE;

defined( 'ABSPATH' ) || exit;

/**
 * Demo Importer Class
 */
class DemoImport {

	/**
	 * Private endpoint
	 *
	 * @var string
	 */
	private $endpoint = 'https://qubely.io/wp-json/restapi/v2/packs';
	
	/**
	 * Public builder
	 * 
	 * @var string
	 */
	public $builder = '';
    
    /**
     * Public Woocommerce plugin config
     * 
     * @var array
     */
    public $woocommerce = array();

    /**
     * Public Tutor LMS plugin config
     * 
     * @var array
     */
    public $tutor_lms = array();

    /**
     * Public Qubely plugin config
     * 
     * @var array
     */
    public $qubely = array();

    /**
     * Public Elementor plugin config
     * 
     * @var array
     */
    public $elementor = array();

	/**
	 * Register Filter Hooks of the Importer Plugin
	 */
	public function register() {
		add_filter( 'tutormate_import_files', array( $this, 'temp_demo_import' ) );
		add_filter( 'tutormate_disable_pt_branding', '__return_true' );
		add_action( 'tutormate_after_import', array( $this, 'assign_defaults' ), 10, 1 );
        add_action( 'wp_ajax_tutormate_selected_builder', array( $this, 'tutormate_selected_builder' ) );
        
        $this->woocommerce = array(
            'base'  => 'woocommerce',
            'slug'  => 'woocommerce',
            'path'  => 'woocommerce/woocommerce.php',
            'title' => esc_html__( 'Woocommerce', 'tutormate' ),
            'src'   => 'repo',
            'state' => PluginCheck::check_status( 'woocommerce/woocommerce.php' ),
        );

        $this->tutor_lms = array(
            'base'  => 'tutor',
            'slug'  => 'tutor',
            'path'  => 'tutor/tutor.php',
            'title' => esc_html__( 'Tutor LMS', 'tutormate' ),
            'src'   => 'repo',
            'state' => PluginCheck::check_status( 'tutor/tutor.php' ),
        );

        $this->qubely = array(
            'base'  => 'qubely',
            'slug'  => 'qubely',
            'path'  => 'qubely/qubely.php',
            'title' => esc_html__( 'Qubely', 'tutormate' ),
            'src'   => 'repo',
            'state' => PluginCheck::check_status( 'qubely/qubely.php' ),
        );

        $this->elementor = array(
            'base'  => 'elementor',
            'slug'  => 'elementor',
            'path'  => 'elementor/elementor.php',
            'title' => esc_html__( 'Elementor', 'tutormate' ),
            'src'   => 'repo',
            'state' => PluginCheck::check_status( 'elementor/elementor.php' ),
        );
	}
	
	/**
	 * Capture builder data
	 */
	public function tutormate_selected_builder() {
		$builder = isset( $_POST['builder'] ) ? sanitize_text_field( $_POST['builder'] ) : 'gutenberg';

		$this->builder = $builder;

		wp_send_json_success( $builder );
	}

	/**
	 * Temporary demo import function
	 */
	public function temp_demo_import() {
		return array(
			array(
				'import_file_name'             => 'Demo One',
				'categories'                   => array( 'Business' ),
				'local_import_file'            => trailingslashit( get_template_directory() ) . 'demo/demo-one/content.xml',
				'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'demo/demo-one/widgets.wie',
				'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'demo/demo-one/customizer.dat',
				'import_preview_image_url'     => get_template_directory_uri() . '/demo/demo-one/preview.jpg',
				'builders'                     => array( 'gutenberg', 'elementor' ),
				'plugins'                      => array(
					$this->tutor_lms,
                    'elementor' === $this->builder ? $this->elementor : $this->qubely,
                ),
			),
			array(
				'import_file_name'             => 'Demo Two',
				'categories'                   => array( 'Business', 'Agency' ),
				'local_import_file'            => trailingslashit( get_template_directory() ) . 'demo/demo-two/content.xml',
				'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'demo/demo-two/widgets.wie',
				'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'demo/demo-two/customizer.dat',
				'import_preview_image_url'     => get_template_directory_uri() . '/demo/demo-two/preview.jpg',
				'builders'                     => array( 'gutenberg', 'elementor' ),
				'plugins'                      => array(
					$this->tutor_lms,
                    $this->woocommerce,
                    'elementor' === $this->builder ? $this->elementor : $this->qubely,
                ),
			),
			array(
				'import_file_name'             => 'Demo Three',
				'categories'                   => array( 'Portfolio', 'Blog' ),
				'local_import_file'            => trailingslashit( get_template_directory() ) . 'demo/demo-three/content.xml',
				'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'demo/demo-three/widgets.wie',
				'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'demo/demo-three/customizer.dat',
				'import_preview_image_url'     => get_template_directory_uri() . '/demo/demo-three/preview.png',
				'builders'                     => array( 'gutenberg' ),
				'plugins'                      => array(
					$this->tutor_lms,
                    'elementor' === $this->builder ? $this->elementor : $this->qubely,
                ),
			),
		);
    }

	/**
	 * Handles Theme Demo Imports for Content, Customizer and Widgets
	 *
	 * @return array $demo_list list of demos
	 */
	public function import_theme_demo() {

		$demo_list  = array();
		$packs_list = get_transient( 'tutorstarter_packs' );

		if ( is_admin() && false === $packs_list ) {

			try {

				$results    = wp_remote_get( $this->endpoint );
				$packs_list = json_decode( $results['body'], true );

				if ( is_array( $packs_list ) || ! empty( $packs_list ) ) {
					set_transient( 'tutorstarter_packs', $packs_list, DAY_IN_SECONDS );
				}
			} catch ( Exception $e ) {
				echo esc_html( $e->getMessage() );
				delete_transient( 'tutorstarter_packs' );
			}
		}

		if ( is_array( $packs_list ) || ! empty( $packs_list ) ) {

			foreach ( $packs_list as $packs ) {

				foreach ( $packs['categories'] as $category ) {
					$category['name'];
				}

				$list = array(
					'import_file_name'           => $packs['name'],
					'categories'                 => array( $category['name'] ),
					'import_file_url'            => $packs['content'],
					'import_widget_file_url'     => $packs['widget'],
					'import_customizer_file_url' => $packs['customizer'],
					'import_preview_image_url'   => $packs['preview_image'],
					'builders'                   => array( 'gutenberg', 'elementor' ),
					'plugins'                    => array( 'qubely', 'elementor' ),
				);

				array_push( $demo_list, $list );
			}
		}

		return $demo_list;
	}

	/**
	 * Handles Setting up the FrontPage, Menus
	 *
	 * @param array $selected_import properties of the selected import.
	 */
	public function assign_defaults( $selected_import ) {
		// Assign menus to their locations.
		$primary   = get_term_by( 'name', 'Primary', 'nav_menu' );
		$secondary = get_term_by( 'name', 'Footer', 'nav_menu' );

		set_theme_mod(
			'nav_menu_locations',
			array(
				'primary'   => $primary->term_id,
				'secondary' => $secondary->term_id,
			)
		);

		// Assign front page.
		$front_page_id = get_page_by_title( $selected_import['import_file_name'] );

		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $front_page_id->ID );
	}
}
