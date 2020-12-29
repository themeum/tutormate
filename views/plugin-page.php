<?php
/**
 * The plugin page view - the "settings" page of the plugin.
 *
 * @package tutormate
 */

namespace TUTORMATE;

$predefined_themes = $this->import_files;

if ( ! empty( $this->import_files ) && isset( $_GET['import-mode'] ) && 'manual' === $_GET['import-mode'] ) {
	$predefined_themes = array();
}

/**
 * Hook for adding the custom plugin page header
 */
do_action( 'tutormate_plugin_page_header' );
?>

<div class="tutormate  wrap  about-wrap">

	<?php 

	// Display warrning if PHP safe mode is enabled, since we wont be able to change the max_execution_time.
	if ( ini_get( 'safe_mode' ) ) {
		printf(
			esc_html__( '%sWarning: your server is using %sPHP safe mode%s. This means that you might experience server timeout errors.%s', 'tutormate' ),
			'<div class="notice  notice-warning  is-dismissible"><p>',
			'<strong>',
			'</strong>',
			'</p></div>'
		);
	}

	// Start output buffer for displaying the plugin intro text.
	ob_start();
	?>

	<div class="tutormate__intro-notice  notice  notice-warning  is-dismissible">
		<p><?php esc_html_e( 'Before you begin, make sure all the required plugins are activated.', 'tutormate' ); ?></p>
	</div>

	<?php
	$plugin_intro_text = ob_get_clean();

	// Display the plugin intro text (can be replaced with custom text through the filter below).
	echo wp_kses_post( apply_filters( 'tutormate_plugin_intro_text', $plugin_intro_text ) );
	?>

	<?php if ( empty( $this->import_files ) ) : ?>
		<div class="notice  notice-info  is-dismissible">
			<p><?php esc_html_e( 'There are no predefined import files available in this theme. Please upload the import files manually!', 'tutormate' ); ?></p>
		</div>
	<?php endif; ?>

	<?php if ( empty( $predefined_themes ) ) : ?>

		<div class="tutormate__file-upload-container">
			<h2><?php esc_html_e( 'Manual demo files upload', 'tutormate' ); ?></h2>

			<div class="tutormate__file-upload">
				<h3><label for="content-file-upload"><?php esc_html_e( 'Choose a XML file for content import:', 'tutormate' ); ?></label></h3>
				<input id="tutormate__content-file-upload" type="file" name="content-file-upload">
			</div>

			<div class="tutormate__file-upload">
				<h3><label for="widget-file-upload"><?php esc_html_e( 'Choose a WIE or JSON file for widget import:', 'tutormate' ); ?></label></h3>
				<input id="tutormate__widget-file-upload" type="file" name="widget-file-upload">
			</div>

			<div class="tutormate__file-upload">
				<h3><label for="customizer-file-upload"><?php esc_html_e( 'Choose a DAT file for customizer import:', 'tutormate' ); ?></label></h3>
				<input id="tutormate__customizer-file-upload" type="file" name="customizer-file-upload">
			</div>

			<?php if ( class_exists( 'ReduxFramework' ) ) : ?>
			<div class="tutormate__file-upload">
				<h3><label for="redux-file-upload"><?php esc_html_e( 'Choose a JSON file for Redux import:', 'tutormate' ); ?></label></h3>
				<input id="tutormate__redux-file-upload" type="file" name="redux-file-upload">
				<div>
					<label for="redux-option-name" class="tutormate__redux-option-name-label"><?php esc_html_e( 'Enter the Redux option name:', 'tutormate' ); ?></label>
					<input id="tutormate__redux-option-name" type="text" name="redux-option-name">
				</div>
			</div>
			<?php endif; ?>
		</div>

		<p class="tutormate__button-container">
			<button class="tutormate__button  button  button-hero  button-primary  js-tutormate-import-data"><?php esc_html_e( 'Import Demo Data', 'tutormate' ); ?></button>
		</p>

	<?php else : ?>

		<!-- TUTORMATE grid layout -->
		<div class="tutormate__gl  js-tutormate-gl">
		<?php
			// Prepare navigation data.
			$categories = Helpers::get_all_demo_import_categories( $predefined_themes );
		?>
			<?php if ( ! empty( $categories ) ) : ?>
				<div class="tutormate__gl-header  js-tutormate-gl-header">
					<nav class="tutormate__gl-navigation">
						<ul>
							<li class="active"><a href="#all" class="tutormate__gl-navigation-link  js-tutormate-nav-link"><?php esc_html_e( 'All', 'tutormate' ); ?></a></li>
							<?php foreach ( $categories as $key => $name ) : ?>
								<li><a href="#<?php echo esc_attr( $key ); ?>" class="tutormate__gl-navigation-link  js-tutormate-nav-link"><?php echo esc_html( $name ); ?></a></li>
							<?php endforeach; ?>
						</ul>
					</nav>
					<div clas="tutormate__gl-search">
						<input type="search" class="tutormate__gl-search-input  js-tutormate-gl-search" name="tutormate-gl-search" value="" placeholder="<?php esc_html_e( 'Search demos...', 'tutormate' ); ?>">
					</div>
				</div>
			<?php endif; ?>
			<div class="tutormate__gl-item-container  wp-clearfix  js-tutormate-gl-item-container">
				<?php foreach ( $predefined_themes as $index => $import_file ) : ?>
					<?php
						// Prepare import item display data.
						$img_src = isset( $import_file['import_preview_image_url'] ) ? $import_file['import_preview_image_url'] : '';
						// Default to the theme screenshot, if a custom preview image is not defined.
						if ( empty( $img_src ) ) {
							$theme = wp_get_theme();
							$img_src = $theme->get_screenshot();
						}

					?>
					<div class="tutormate__gl-item js-tutormate-gl-item" data-categories="<?php echo esc_attr( Helpers::get_demo_import_item_categories( $import_file ) ); ?>" data-name="<?php echo esc_attr( strtolower( $import_file['import_file_name'] ) ); ?>">
						<div class="tutormate__gl-item-image-container">
							<?php if ( ! empty( $img_src ) ) : ?>
							<div class="builder-wrapper">
								<h3>Available for:</h3>
								<div class="builder-overlay-container">
								<?php 
									if ( ! empty( $import_file['builders'] ) && is_array( $import_file['builders'] ) ) :
										foreach ( $import_file['builders'] as $builder ) : ?>
											<div class="builder-card"><a class="pack-builder" href="#" data-builder="<?php echo $builder; ?>" data-index="<?php echo esc_attr( $index ); ?>"><?php echo $builder; ?></a></div>
								<?php 
									endforeach;
									endif;
								 ?>
								</div>
							</div>
								<img class="tutormate__gl-item-image" src="<?php echo esc_url( $img_src ) ?>">
							<?php else : ?>
								<div class="tutormate__gl-item-image  tutormate__gl-item-image--no-image"><?php esc_html_e( 'No preview image.', 'tutormate' ); ?></div>
							<?php endif; ?>
						</div>
						<div class="tutormate__gl-item-footer<?php echo ! empty( $import_file['preview_url'] ) ? '  tutormate__gl-item-footer--with-preview' : ''; ?>">
							<h4 class="tutormate__gl-item-title" title="<?php echo esc_attr( $import_file['import_file_name'] ); ?>"><?php echo esc_html( $import_file['import_file_name'] ); ?></h4>
							<button class="tutormate__gl-item-button  button  button-primary  js-tutormate-gl-import-data" value="<?php echo esc_attr( $index ); ?>"><?php esc_html_e( 'Import', 'tutormate' ); ?></button>
							<?php if ( ! empty( $import_file['preview_url'] ) ) : ?>
								<a class="tutormate__gl-item-button  button" href="<?php echo esc_url( $import_file['preview_url'] ); ?>" target="_blank"><?php esc_html_e( 'Preview', 'tutormate' ); ?></a>
							<?php endif; ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div id="js-tutormate-modal-content"></div>
		<div id="js-tutormate-builder-modal-content"></div>

	<?php endif; ?>

	<p class="tutormate__ajax-loader  js-tutormate-ajax-loader">
		<span class="spinner"></span> <?php esc_html_e( 'Importing, please wait!', 'tutormate' ); ?>
	</p>

	<div class="tutormate__response  js-tutormate-ajax-response"></div>
</div>

<?php
/**
 * Hook for adding the custom admin page footer
 */
do_action( 'tutormate_plugin_page_footer' );
