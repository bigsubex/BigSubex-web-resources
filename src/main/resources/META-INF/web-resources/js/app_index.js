$(document).ready(function() {

	// Loads Foundation plugins, Slider
	$(document).foundation({
		equalizer : {
			// Specify if Equalizer should make elements equal height once they become stacked.
			equalize_on_stack : false
		},
		orbit : {
			animation : 'slide',
			timer_speed : 5000,
			pause_on_hover : false,
			animation_speed : 1000,
			navigation_arrows : true,
			bullets : false
		}
	});

	// jQuery UI Accordion
	$(".accordion").accordion({
		heightStyle : "content"
	});

	// JSTREE für Baumstruktur
	$('.jstree').jstree({
		"plugins" : ["wholerow"]
	});
	$('.jstree-checkbox').jstree({
		"checkbox" : {
			"keep_selected_style" : false
		},
		"plugins" : ["checkbox", "wholerow"],
		"core" : {
			"themes" : {
				"icons" : false
			}
		}
	});

	// Custom Scrollbar
	$(".customscrollbar").mCustomScrollbar();

	$('#products_parentlist').on("click", 'a', function(e) {
		e.preventDefault();
		$('#products_parentlist a').removeClass('active');
		$(this).addClass('active');
	});
	$('#products_search').on("click", 'a', function(e) {
		e.preventDefault();
		$('#products_search a').removeClass('active');
		$(this).addClass('active');
	});

	/**
	 * products
	 * Industrie & Material Navigation
	 */
	$(".listing a").click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		$(this).parent().siblings('li').children('a').removeClass('active');
		$(this).addClass('active');

		if (!$(this).closest('.listing').is(':animated')) {

			$(this).closest('.listing').animate({
				left : "-=" + $(this).closest('.listing').width()
			}, {
				duration : 300,
				queue : false
			});
		}

	});

	$("#products_search .biglist").on("click", 'a', function(e) {
		e.preventDefault();
		$('#products_parentlist .biglist').show();
	});

}); 