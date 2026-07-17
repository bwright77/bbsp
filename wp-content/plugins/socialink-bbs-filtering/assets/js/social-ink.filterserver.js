(function($) {
jQuery(document).ready(function($) {
	console.log('socialink-plugin.plugin-filtering');
	$('.socialink-plugin.plugin-filtering').on('click', '.cancelSearch', function(e) {
		e.preventDefault();
		resetButtonUX();
	});
	$('.socialink-plugin.plugin-filtering').on('click', '.navigate_previous', function(e) {
		e.preventDefault();
		var $container = $('.socialink-plugin.plugin-filtering')
		var pagination_current_page = $(this).data('gotopage');
		$container.data('pagination_current_page', pagination_current_page);
		searchResources();
	});
	$('.socialink-plugin.plugin-filtering').on('click', '.navigate_next', function(e) {
		e.preventDefault();
		var $container = $('.socialink-plugin.plugin-filtering')
		var pagination_current_page = $(this).data('gotopage');
		$container.data('pagination_current_page', pagination_current_page);
		searchResources();
	});
	$('.socialink-plugin.plugin-filtering').on('click', '#plugin-filter-main', function(e) {
		e.preventDefault();
		searchResources();
	});
	$('.socialink-plugin.plugin-filtering').on('keydown','input[type="text"]',  function (e) {
		if (e.keyCode === 13) {
			searchResources();
		}
	});
	$('.socialink-plugin.plugin-filtering').on('change select','#sinkfilter-post_type',  function (e) {
		e.preventDefault();
		var $selector = $(this);
		var $selected = $selector.find('option:selected');
		selectTaxonomyShow($(this).val());
		resetPagination();
	});
	$('.socialink-plugin.plugin-filtering').on('change select','.taxonomy_filtering_dropdown',  function (e) {
		e.preventDefault();
		var $selector = $(this);
		var $selected = $selector.find('option:selected');
		resetPagination();
	});
	$('.socialink-plugin.plugin-filtering').on('click','#plugin-filter-reset',  function (e) {
		e.preventDefault();
		resetButtonUX();
	});
	function filterScrolltoElement($elemnt_obj) {
	    $('html,body').animate({ scrollTop: ($elemnt_obj.offset().top - 0) }, 'slow');
	}
	function initFiltering() {
		var $resource_tax_box = $('.sinkfilter-type-resources');
	}
	function selectTaxonomyShow(option) {
		var $resource_tax_box = $('.sinkfilter-type-resources');
		if( (option == 'resource') || (option == '') ) {
			$resource_tax_box.removeClass('hidden');
		} else {
			$resource_tax_box.addClass('hidden');
			$resource_tax_box.find('select').val('');
		}
	}
	function resetPagination() {
	var $container = $('.socialink-plugin.plugin-filtering');;
	var $container = $('.socialink-plugin.plugin-filtering').data('pagination_current_page', 0);
	var $results_navigation = $container.find('.results_navigation').removeClass('on');
	}
	function resetButtonUX() {
		resetPagination();
		var $container = $('.socialink-plugin.plugin-filtering').removeClass('searched');
		var $btn = $container.find('#plugin-filter-main').text('Search');
		var $txtfield = $container.find('.type-keyword').val('');
		var $results_container = $container.find('.filtering_results').removeClass('results-nonefound results-success searching searched filters-insufficient').addClass('results-init');
		var $results_list = $results_container.find('.results-container').empty();
		var $allFilters = $container.find('.socialink-input-filter').each(function (i) {
			$(this).val('');
		});
	}
	function searchResources() {
		var $container = $('.socialink-plugin.plugin-filtering').addClass('searched');
		var $results_container = $container.find('.filtering_results').removeClass('results-init results-nonefound results-success').addClass('searching searched');
		var $results_list = $results_container.find('.results-container').empty();
		var $results_container_init = $container.find('.results-message-init').removeClass('on');
		var $results_filters_breakdown = $results_container.find('.resultsFoundFilters').empty();
		var $results_on_display_count = $results_container.find('.resultsFoundNum').empty();
		var $results_found_label = $results_container.find('.resultsfound-on').empty();
		var $results_navigation = $container.find('.results_navigation').removeClass('on');
		var $results_found_message = $results_container.find('> h2').addClass("here");
		// filterScrolltoElement($results_container);
		$container.find('.query_response').text('').hide();
		var pagination_current_page = $container.data('pagination_current_page');
		var filters = {};
		var filters_threshhold = 0;
		var $allFilters = $container.find('.socialink-input-filter').each(function (i) {
			var $this = $(this);
			if($this.val() != "") {
				var id = $(this).prop('id');
				var onefilter = Array();
				filters[id] = $(this).val();
				if($this.is('.minimal_filter'))
					filters_threshhold++;
			}
		});

		// if(filters_threshhold == 0 ) {
		// 	$results_container.addClass('filters-insufficient').removeClass('searching');
		// 	return false;
		// } else
		// 	$results_container.removeClass('filters-insufficient');

		var $btn = $container.find('#plugin-filter-main').text('Processing...');
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: ajaxurl,
			data: {
				'action': 'ajax_sinkPluginFilterResources',
				'filters':  filters,
				'pagination_current_page' : pagination_current_page
			},
			success: function(data) {
				$btn.text('Search Again');
				if(data.success == true) {
					$results_container.removeClass('searching').addClass('results-success');
					$results_on_display_count.text(data.itemcount);
					$results_list.html(data.item_layout);
					// $results_filters_breakdown.html(data.results_filters_breakdown);
					$results_found_label.text(data.results_label_full);
					if(data.items_havemore) {
						$results_navigation.addClass('on');

						var $results_nav_prev = $results_navigation.find('.navigate_previous').data('gotopage', (data.items_current_page-1)).text('Go to page ' + ( data.items_current_page));
						if(data.items_current_page == 0)
							$results_nav_prev.addClass('notuse');
						else
							$results_nav_prev.removeClass('notuse');
						var $results_nav_next = $results_navigation.find('.navigate_next').data('gotopage', data.items_next_page).text('Go to page ' + ( data.items_next_page + 1));
					} else {

					}
				} else {
					$results_container.removeClass('searching').addClass('results-nonefound');
				}
				// $results_found_message.focus();
			}
		});
	}

	//And start
	initFiltering();
});
})();