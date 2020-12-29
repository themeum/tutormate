jQuery( function ( $ ) {
	'use strict';

	/**
	 * ---------------------------------------
	 * ------------- Events ------------------
	 * ---------------------------------------
	 */

	/**
	 * No or Single predefined demo import button click.
	 */
	$( '.js-tutormate-import-data' ).on( 'click', function () {

		// Reset response div content.
		$( '.js-tutormate-ajax-response' ).empty();

		// Prepare data for the AJAX call
		var data = new FormData();
		data.append( 'action', 'tutormate_import_demo_data' );
		data.append( 'security', tutormate.ajax_nonce );
		data.append( 'selected', $( '#tutormate__demo-import-files' ).val() );
		if ( $('#tutormate__content-file-upload').length ) {
			data.append( 'content_file', $('#tutormate__content-file-upload')[0].files[0] );
		}
		if ( $('#tutormate__widget-file-upload').length ) {
			data.append( 'widget_file', $('#tutormate__widget-file-upload')[0].files[0] );
		}
		if ( $('#tutormate__customizer-file-upload').length ) {
			data.append( 'customizer_file', $('#tutormate__customizer-file-upload')[0].files[0] );
		}
		if ( $('#tutormate__redux-file-upload').length ) {
			data.append( 'redux_file', $('#tutormate__redux-file-upload')[0].files[0] );
			data.append( 'redux_option_name', $('#tutormate__redux-option-name').val() );
		}

		// AJAX call to import everything (content, widgets, before/after setup)
		ajaxCall( data );

	});

	/**
	 * Grid Layout import button click.
	 */
	$( '.js-tutormate-gl-import-data' ).on( 'click', function () {
		var selectedImportID = $( this ).val();
		var $itemContainer   = $( this ).closest( '.js-tutormate-gl-item' );

		// If the import confirmation is enabled, then do that, else import straight away.
		if ( tutormate.import_popup ) {
			//builderSelectionPopup( selectedImportID, $itemContainer );
			//displayConfirmationPopup( selectedImportID, $itemContainer );
		}
		else {
			gridLayoutImport( selectedImportID, $itemContainer );
		}
	});

	/**
	 * Builder Selection
	 */
	$( '.pack-builder' ).on( 'click', function() {
		var selectedImportID = $( this ).attr('data-index');
		var $itemContainer   = $( this ).closest( '.js-tutormate-gl-item' );
		var builder = $( this ).attr( 'data-builder' );

		var formData = new FormData();

		formData.append( 'action', 'selected_builder' );
		formData.append( 'security', tutormate.ajax_nonce );
		formData.append( 'builder', builder );

		$.ajax({
			method:      'POST',
			url:         tutormate.ajax_url,
			data:        formData,
			contentType: false,
			processData: false,
		})
		.done( response => {
			builderSelectionPopup( selectedImportID, $itemContainer, response )
		})
		.fail( response => {
			console.log( 'Something went wrong. Please try again!' );
		})
	});

	/**
	 * Display Builder Details on hover
	 */
	// var imgContainer = document.querySelector( '.tutormate__gl-item-image-container' );
	// var builderContainer = document.querySelector( '.builder-wrapper' );
	

	// imgContainer.addEventListener( 'mouseenter', function() {
	// 	builderContainer.classList.add( 'visible' );
	// } );

	// imgContainer.addEventListener( 'mouseleave', function() {
	// 	builderContainer.classList.remove( 'visible' );
	// } );

	/**
	 * Grid Layout categories navigation.
	 */
	(function () {
		// Cache selector to all items
		var $items = $( '.js-tutormate-gl-item-container' ).find( '.js-tutormate-gl-item' ),
			fadeoutClass = 'tutormate-is-fadeout',
			fadeinClass = 'tutormate-is-fadein',
			animationDuration = 200;

		// Hide all items.
		var fadeOut = function () {
			var dfd = jQuery.Deferred();

			$items
				.addClass( fadeoutClass );

			setTimeout( function() {
				$items
					.removeClass( fadeoutClass )
					.hide();

				dfd.resolve();
			}, animationDuration );

			return dfd.promise();
		};

		var fadeIn = function ( category, dfd ) {
			var filter = category ? '[data-categories*="' + category + '"]' : 'div';

			if ( 'all' === category ) {
				filter = 'div';
			}

			$items
				.filter( filter )
				.show()
				.addClass( 'tutormate-is-fadein' );

			setTimeout( function() {
				$items
					.removeClass( fadeinClass );

				dfd.resolve();
			}, animationDuration );
		};

		var animate = function ( category ) {
			var dfd = jQuery.Deferred();

			var promise = fadeOut();

			promise.done( function () {
				fadeIn( category, dfd );
			} );

			return dfd;
		};

		$( '.js-tutormate-nav-link' ).on( 'click', function( event ) {
			event.preventDefault();

			// Remove 'active' class from the previous nav list items.
			$( this ).parent().siblings().removeClass( 'active' );

			// Add the 'active' class to this nav list item.
			$( this ).parent().addClass( 'active' );

			var category = this.hash.slice(1);

			// show/hide the right items, based on category selected
			var $container = $( '.js-tutormate-gl-item-container' );
			$container.css( 'min-width', $container.outerHeight() );

			var promise = animate( category );

			promise.done( function () {
				$container.removeAttr( 'style' );
			} );
		} );
	}());


	/**
	 * Grid Layout search functionality.
	 */
	$( '.js-tutormate-gl-search' ).on( 'keyup', function( event ) {
		if ( 0 < $(this).val().length ) {
			// Hide all items.
			$( '.js-tutormate-gl-item-container' ).find( '.js-tutormate-gl-item' ).hide();

			// Show just the ones that have a match on the import name.
			$( '.js-tutormate-gl-item-container' ).find( '.js-tutormate-gl-item[data-name*="' + $(this).val().toLowerCase() + '"]' ).show();
		}
		else {
			$( '.js-tutormate-gl-item-container' ).find( '.js-tutormate-gl-item' ).show();
		}
	} );

	/**
	 * ---------------------------------------
	 * --------Helper functions --------------
	 * ---------------------------------------
	 */

	/**
	 * Prepare grid layout import data and execute the AJAX call.
	 *
	 * @param int selectedImportID The selected import ID.
	 * @param obj $itemContainer The jQuery selected item container object.
	 */
	function gridLayoutImport( selectedImportID, $itemContainer ) {
		// Reset response div content.
		$( '.js-tutormate-ajax-response' ).empty();

		// Hide all other import items.
		$itemContainer.siblings( '.js-tutormate-gl-item' ).fadeOut( 500 );

		$itemContainer.animate({
			opacity: 0
		}, 500, 'swing', function () {
			$itemContainer.animate({
				opacity: 1
			}, 500 )
		});

		// Hide the header with category navigation and search box.
		$itemContainer.closest( '.js-tutormate-gl' ).find( '.js-tutormate-gl-header' ).fadeOut( 500 );

		// Append a title for the selected demo import.
		$itemContainer.parent().prepend( '<h3>' + tutormate.texts.selected_import_title + '</h3>' );

		// Remove the import button of the selected item.
		$itemContainer.find( '.js-tutormate-gl-import-data' ).remove();

		// Prepare data for the AJAX call
		var data = new FormData();
		data.append( 'action', 'tutormate_import_demo_data' );
		data.append( 'security', tutormate.ajax_nonce );
		data.append( 'selected', selectedImportID );

		// AJAX call to import everything (content, widgets, before/after setup)
		ajaxCall( data );
	}

	/**
	 * Display the confirmation popup.
	 *
	 * @param int selectedImportID The selected import ID.
	 * @param obj $itemContainer The jQuery selected item container object.
	 */
	function displayConfirmationPopup( selectedImportID, $itemContainer ) {
		var $dialogContainer        = $( '#js-tutormate-modal-content' );
		var currentFilePreviewImage = tutormate.import_files[ selectedImportID ]['import_preview_image_url'] || tutormate.theme_screenshot;
		var previewImageContent     = '';
		var importNotice            = tutormate.import_files[ selectedImportID ]['import_notice'] || '';
		var importNoticeContent     = '';
		var dialogOptions           = $.extend(
			{
				'dialogClass': 'wp-dialog',
				'resizable':   false,
				'height':      'auto',
				'modal':       true
			},
			tutormate.dialog_options,
			{
				'buttons':
				[
					{
						text: tutormate.texts.dialog_no,
						click: function() {
							$(this).dialog('close');
						}
					},
					{
						text: tutormate.texts.dialog_next,
						class: 'button  button-primary',
						click: function() {
							$(this).dialog('close');
							gridLayoutImport( selectedImportID, $itemContainer );
						}
					}
				]
			});

		if ( '' === currentFilePreviewImage ) {
			previewImageContent = '<p>' + tutormate.texts.missing_preview_image + '</p>';
		}
		else {
			previewImageContent = '<div class="tutormate__modal-image-container"><img src="' + currentFilePreviewImage + '" alt="' + tutormate.import_files[ selectedImportID ]['import_file_name'] + '"></div>'
		}

		// Prepare notice output.
		if( '' !== importNotice ) {
			importNoticeContent = '<div class="tutormate__modal-notice  tutormate__demo-import-notice">' + importNotice + '</div>';
		}

		// Populate the dialog content.
		$dialogContainer.prop( 'title', tutormate.texts.dialog_choose_builder );
		$dialogContainer.html(
			'<p class="tutormate__modal-item-title">' + tutormate.import_files[ selectedImportID ]['import_file_name'] + '</p>' +
			previewImageContent +
			importNoticeContent
		);

		// Display the confirmation popup.
		$dialogContainer.dialog( dialogOptions );
	}

	/**
	 * Builder selection popup
	 */
	function builderSelectionPopup( selectedImportID, $itemContainer, builder ) {
		var $dialogContainer        = $( '#js-tutormate-builder-modal-content' );
		var requiredPlugins         = tutormate.import_files[ selectedImportID ]['plugins'] || [];
		var requiredPluginsContent  = '';
		var importNotice            = tutormate.import_files[ selectedImportID ]['import_notice'] || '';
		var importNoticeContent     = '';
		var dialogOptions           = $.extend(
			{
				'dialogClass': 'wp-dialog',
				'resizable':   false,
				'height':      'auto',
				'modal':       true
			},
			tutormate.dialog_options,
			{
				'buttons':
				[
					{
						text: tutormate.texts.dialog_no,
						click: function() {
							$(this).dialog('close');
						}
					},
					{
						text: tutormate.texts.dialog_next,
						class: 'button  button-primary',
						click: function() {
							$(this).dialog('close');
							//gridLayoutImport( selectedImportID, $itemContainer );
						}
					}
				]
			});

		if ( ! requiredPlugins.length  ) {
			requiredPluginsContent = '<p>This demo does not require any additional plugins to be installed</p>';
		}
		else {
			function pluginsDisplay() {
				var plugins = '';
				requiredPlugins.forEach( plugin => {
					plugins += '<span style="font-weight: 500; text-transform: capitalize;">' + plugin['title'] + '<br />' + '</span>';
				} );

				return plugins;
			}
			requiredPluginsContent = '<div class="tutormate__modal-plugins-container">The following plugins will be installed and activated for this demo if not already available: ' + '<br />' + pluginsDisplay() + '</div>'
		}

		// Prepare notice output.
		if( '' !== importNotice ) {
			importNoticeContent = '<div class="tutormate__modal-notice  tutormate__demo-import-notice">' + importNotice + '</div>';
		}

		// Populate the dialog content.
		$dialogContainer.prop( 'title', tutormate.texts.dialog_plugins );
		$dialogContainer.html(
			requiredPluginsContent +
			importNoticeContent
		);

		// Display the confirmation popup.
		$dialogContainer.dialog( dialogOptions );
	}

	/**
	 * The main AJAX call, which executes the import process.
	 *
	 * @param FormData data The data to be passed to the AJAX call.
	 */
	function ajaxCall( data ) {
		$.ajax({
			method:      'POST',
			url:         tutormate.ajax_url,
			data:        data,
			contentType: false,
			processData: false,
			beforeSend:  function() {
				$( '.js-tutormate-ajax-loader' ).show();
			}
		})
		.done( function( response ) {
			if ( 'undefined' !== typeof response.status && 'newAJAX' === response.status ) {
				ajaxCall( data );
			}
			else if ( 'undefined' !== typeof response.status && 'customizerAJAX' === response.status ) {
				// Fix for data.set and data.delete, which they are not supported in some browsers.
				var newData = new FormData();
				newData.append( 'action', 'tutormate_import_customizer_data' );
				newData.append( 'security', tutormate.ajax_nonce );

				// Set the wp_customize=on only if the plugin filter is set to true.
				if ( true === tutormate.wp_customize_on ) {
					newData.append( 'wp_customize', 'on' );
				}

				ajaxCall( newData );
			}
			else if ( 'undefined' !== typeof response.status && 'afterAllImportAJAX' === response.status ) {
				// Fix for data.set and data.delete, which they are not supported in some browsers.
				var newData = new FormData();
				newData.append( 'action', 'tutormate_after_import_data' );
				newData.append( 'security', tutormate.ajax_nonce );
				ajaxCall( newData );
			}
			else if ( 'undefined' !== typeof response.message ) {
				$( '.js-tutormate-ajax-response' ).append( '<p>' + response.message + '</p>' );
				$( '.js-tutormate-ajax-loader' ).hide();

				// Trigger custom event, when TUTORMATE import is complete.
				$( document ).trigger( 'tutormateImportComplete' );
			}
			else {
				$( '.js-tutormate-ajax-response' ).append( '<div class="notice  notice-error  is-dismissible"><p>' + response + '</p></div>' );
				$( '.js-tutormate-ajax-loader' ).hide();
			}
		})
		.fail( function( error ) {
			$( '.js-tutormate-ajax-response' ).append( '<div class="notice  notice-error  is-dismissible"><p>Error: ' + error.statusText + ' (' + error.status + ')' + '</p></div>' );
			$( '.js-tutormate-ajax-loader' ).hide();
		});
	}
} );
