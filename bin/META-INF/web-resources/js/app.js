Ember.View.reopen({
	didInsertElement : function() {
		this._super();
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent : function() {

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
		/*Ember.$("#listing_back").click(function(e) {
		 e.preventDefault();
		 $('.listing').animate({
		 left : "+=" + $('.listing').width()
		 }, {
		 duration : 300,
		 queue : false
		 });
		 });*/

		Ember.$("#products_search .biglist").on("click", 'a', function(e) {
			e.preventDefault();
			Ember.$('#products_parentlist .biglist').show();
			//var txt = $(this).text();
			//Ember.$('#products_parentlist h4.productshead').text(txt);
		})
	}
});

/**
 * Sets up an Ember Application.
 * Can be removed from Spring Application.
 */
App = Ember.Application.create({
	currentPath : '',
});
App.ApplicationController = Ember.Controller.extend({
	updateCurrentPath : function() {
		App.set('currentPath', this.get('currentPath'));

		console.log(this.get('currentPath'));
		if (this.get('currentPath') == 'index') {
			App.set('showSlider', true);
		} else {
			App.set('showSlider', false);
		}
	}.observes('currentPath')
}), App.Router.map(function() {
	// put your routes here
	this.resource("buy", function() {
		this.route("teile-zu-fertigen");
		this.route("fertigteile");
		this.route("standardteile");
		this.route("normteile");

	});
	this.resource("sell", function() {
		this.route("teile-zu-fertigen");
		this.route("fertigteile");
		this.route("standardteile");
		this.route("normteile");
	});
	this.resource("login", function() {
		this.route("user");
		this.route("guest");
	});
	this.resource("user", function() {
		this.route("lostpassword");
		this.resource("register", function() {
			this.route("company");
			this.route("employees")
		});

		this.route("lostpassword");
	});
	this.resource("employees", function() {
		this.route("edit");
	});

	this.resource("products", function() {
		this.route("zahnrad");
		this.route("old");
	});

	this.resource('supplier', function() {
		this.route("show");
	})

	this.route("admin");
});

