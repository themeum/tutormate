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
	private $endpoint = 'https://api.tutorlms.com/wp-json/restapi/v1/tutorpacks';
	
	/**
	 * Public builder
	 * 
	 * @var string
	 */
	public $builder = 'gutenberg';
    
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
	 * Public Tutor Elementor Addon
	 */
	public $tutor_elementor = array();

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
	 * Public is_gutenberg
	 * 
	 * @var array
	 */
	public $is_gutenberg = array();

	/**
	 * Public is elementor
	 * 
	 * @var array
	 */
	public $is_elementor = array();

	/**
	 * Register Hooks of the Importer Plugin
	 */
	public function register() {
		add_filter( 'tutormate_import_files', array( $this, 'temp_demo_import' ) );
		add_action( 'tutormate_after_import', array( $this, 'assign_defaults' ), 10, 1 );
		add_action( 'admin_enqueue_scripts', array( $this, 'tutormate_admin_enqueue_scripts' ) );
        
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
		
        $this->tutor_elementor = array(
            'base'  => 'tutor-lms-elementor-addons',
            'slug'  => 'tutor-lms-elementor-addons',
            'path'  => 'tutor-lms-elementor-addons/tutor-lms-elementor-addons.php',
            'title' => esc_html__( 'Tutor Elementor Addon', 'tutormate' ),
            'src'   => 'repo',
            'state' => PluginCheck::check_status( 'tutor-lms-elementor-addons/tutor-lms-elementor-addons.php' ),
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
	 * Builder plugins
	 */
	public function elementor_plugins() {
		return $this->is_elementor = array(
			$this->elementor,
			$this->tutor_lms,
			$this->woocommerce,
			$this->tutor_elementor,
		);
	}

	/**
	 * Gutenberg plugins
	 */
	public function gutenberg_plugins() {
		return $this->is_gutenberg = array(
			$this->tutor_lms,
			$this->qubely,
			$this->woocommerce,
		);
	}

	/**
	 * Admin script localization
	 */
	public function tutormate_admin_enqueue_scripts() {
		if ( ! isset( $_GET['page'] ) || 'tutorstarter-demo-import' !== $_GET['page'] ) {
			return;
		}
		wp_localize_script('tutormate-demo-importer', 'builderplugins',
			array(
				'elementor_plugins' => $this->elementor_plugins(),
				'gutenberg_plugins' => $this->gutenberg_plugins(),
			)
		);
	}

	/**
	 * Temporary demo import function
	 */
	public function temp_demo_import() {

		$this->builder = isset( $_POST['builder'] ) ? sanitize_text_field( $_POST['builder'] ) : 'gutenberg';

		return array(
			array(
				'import_file_name'             => 'Demo One',
				'categories'                   => array( 'Business' ),
				'local_import_file'            => trailingslashit( get_template_directory() ) . 'demo/demo-one/content.xml',
				'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'demo/demo-one/widgets.wie',
				'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'demo/demo-one/customizer.dat',
				'import_preview_image_url'     => get_template_directory_uri() . '/demo/demo-one/preview.jpg',
				'preview_url'                  => 'https://preview.tutorlms.com/',
				'builders'                     => array( 'gutenberg', 'elementor' ),
				'plugins'                      => 'elementor' === $this->builder ? $this->elementor_plugins() : $this->gutenberg_plugins(),
				'notice'                       => __( 'This demo requires the <a href="https://www.themeum.com/product/tutor-pro">Tutor Pro</a> plugin to be installed and activated.', 'tutormate' ),
			),
			array(
				'import_file_name'             => 'Demo Two',
				'categories'                   => array( 'Business', 'Agency' ),
				'local_import_file'            => trailingslashit( get_template_directory() ) . 'demo/demo-two/content.xml',
				'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'demo/demo-two/widgets.wie',
				'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'demo/demo-two/customizer.dat',
				'import_preview_image_url'     => get_template_directory_uri() . '/demo/demo-two/preview.jpg',
				'preview_url'                  => 'https://preview.tutorlms.com/',
				'builders'                     => array( 'gutenberg', 'elementor' ),
				'plugins'                      => 'elementor' === $this->builder ? $this->elementor_plugins() : $this->gutenberg_plugins(),
				'notice'                       => __( 'This demo requires the <a href="https://www.themeum.com/product/tutor-pro">Tutor Pro</a> plugin to be installed and activated.', 'tutormate' ),
			),
			array(
				'import_file_name'             => 'Demo Three',
				'categories'                   => array( 'Portfolio', 'Blog' ),
				'local_import_file'            => trailingslashit( get_template_directory() ) . 'demo/demo-three/content.xml',
				'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'demo/demo-three/widgets.wie',
				'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'demo/demo-three/customizer.dat',
				'import_preview_image_url'     => get_template_directory_uri() . '/demo/demo-three/preview.png',
				'preview_url'                  => 'https://preview.tutorlms.com/',
				'builders'                     => array( 'gutenberg' ),
				'plugins'                      => 'elementor' === $this->builder ? $this->elementor_plugins() : $this->gutenberg_plugins(),
				'notice'                       => __( 'This demo requires the <a href="https://www.themeum.com/product/tutor-pro">Tutor Pro</a> plugin to be installed and activated.', 'tutormate' ),
			),
		);
	}

	/**
	 * Handles Theme Demo Imports for Content, Customizer and Widgets
	 *
	 * @return array $demo_list list of demos
	 */
	public function import_theme_demo() {

		$this->builder = isset( $_POST['builder'] ) ? sanitize_text_field( $_POST['builder'] ) : 'gutenberg';
		
		$demo_list  = array();
		$packs_list = get_transient( 'tutorstarter_packs' );

		if ( is_admin() && false === $packs_list ) {

			try {

				$results    = wp_remote_get( $this->endpoint );
				$packs_list = json_decode( $results['body'], true );

				if ( is_array( $packs_list ) || ! empty( $packs_list ) ) {
					set_transient( 'tutorstarter_packs', $packs_list, 1 * HOUR_IN_SECONDS );
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
					'plugins'                    => 'elementor' === $this->builder ? $this->elementor_plugins() : $this->gutenberg_plugins(),
					'preview_url'                => $packs['preview_url'],
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
