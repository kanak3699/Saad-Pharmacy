// page init
jQuery(function(){
	"use strict";

		initTabs();
		initbackTop();
		initCounter();
		initLightbox();
		initAddClass();
		initGoogleMap();
		initAccordion();
		initSlickSlider();


	jQuery(window).on('load', function() {
		"use strict";

		initIsoTop();
		initPreLoader();
	});

	// Add Class  init
	function initAddClass() {
		"use strict";

		jQuery('.nav-opener, .nav-opener2').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});
		jQuery('.contact-opener').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("contact-active");
		});
	}

	// content tabs init
	function initTabs() {
		"use strict";

		jQuery('ul.tabset').tabset({
			tabLinks: 'a',
			addToParent: true,
			checkHash: true,
			defaultTab: false
		});
	}

	$( function() {
		"use strict";

		$( "#datepicker, #datepicker2" ).datepicker();
	} );

	// IsoTop init
	function initIsoTop() {
		"use strict";

		var isotopeHolder = jQuery('.work-holder'),
			win = jQuery(window);
		jQuery('.filter-list a').on( "click", function(e){
			e.preventDefault();
			
			jQuery('.filter-list li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			var selector = jQuery(this).attr('data-filter');
			isotopeHolder.isotope({ filter: selector });
		});
		jQuery('.work-holder').isotope({
			itemSelector: '.item',
			transitionDuration: '0.6s',
			masonry: {
		    	columnWidth: '.item'
			}
		});
	}

	// Slick Slider init
	function initSlickSlider() {
		"use strict";

		jQuery('.main-slider').slick({
			dots: true,
			speed: 800,
			infinite: true,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: true,
			arrows: false,
			fade: true,
			autoplaySpeed: 4000
		});
		jQuery('.testimonail-slider').slick({
			dots: true,
			speed: 800,
			infinite: true,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: true,
			arrows: false,
			fade: true,
			autoplaySpeed: 4000
		});
		jQuery('.testimonials-slider').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 2,
			adaptiveHeight: true,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 4000,
			responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 1,
			        infinite: true
			      }
			    }
			]
		});
		jQuery('.team-slider').slick({
			dots: true,
			speed: 800,
			infinite: true,
			slidesToShow: 3,
			adaptiveHeight: true,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 4000,
			responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 2,
			        infinite: true
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        infinite: true
			      }
			    }
			]
		});
		jQuery('.team-slider2').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 3,
			centerMode: true,
			centerPadding: '350px',
			adaptiveHeight: true,
			autoplay: false,
			arrows: true,
			autoplaySpeed: 4000,
			responsive: [
			    {
			      breakpoint: 1550,
			      settings: {
			        slidesToShow: 2,
			        infinite: true
			      }
			    },
			    {
			      breakpoint: 1199,
			      settings: {
			        slidesToShow: 1,
			        infinite: true,
			        centerPadding: '250px'
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        centerPadding: '0',
			        arrows: false
			      }
			    }
			]
		});
		jQuery('.team-slider3').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 4,
			adaptiveHeight: true,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 4000,
			responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 2,
			        infinite: true
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        arrows: false,
			        infinite: true
			      }
			    }
			]
		});
	}

	// Counter init
	function initCounter() {
		"use strict";

		jQuery('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	}

	// modal popup init
	function initLightbox() {
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			helpers: {
				overlay: {
					css: {
						background: 'rgba(0, 0, 0, 0.65)'
					}
				}
			},
			afterLoad: function(current, previous) {
				// handle custom close button in inline modal
				if(current.href.indexOf('#') === 0) {
					jQuery(current.href).find('a.close').off('click.fb').on('click.fb', function(e){
						e.preventDefault();
						jQuery.fancybox.close();
					});
				}
			},
			padding: 0
		});
	}

	// GoogleMap init
	function initGoogleMap() {
		"use strict";

		jQuery('.map').googleMapAPI({
			marker: 'images/icon.png',
			mapInfoContent: '.map-info',
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			panControl: false,
			zoomControl: false
		});
	}

	// backtop init
	function initbackTop() {
		"use strict";

	    var jQuerybackToTop = jQuery("#back-top");
	    jQuery(window).on('scroll', function() {
	        if (jQuery(this).scrollTop() > 100) {
	            jQuerybackToTop.addClass('active');
	        } else {
	            jQuerybackToTop.removeClass('active');
	        }
	    });
	    jQuerybackToTop.on('click', function(e) {
	        jQuery("html, body").animate({scrollTop: 0}, 900);
	    });
	}

	// PreLoader init
	function initPreLoader() {
	    "use strict";

	    jQuery('#loader').delay(1000).fadeOut();
	}

	// accordion menu init
	function initAccordion() {
		"use strict";
		
		jQuery('ul.accordion2').slideAccordion({
			addClassBeforeAnimation: true,
			opener: 'a.opener',
			slider: 'div.slide',
			animSpeed: 300
		});
	}

	$(function(){
		"use strict";

		$('#remove, #remove2, #remove3, #remove4, #remove5, #remove6, #remove7, #remove8').data('holder',$('#remove, #remove2, #remove3, #remove4, #remove5, #remove6, #remove7, #remove8').attr('placeholder'));
		$('#remove, #remove2, #remove3, #remove4, #remove5, #remove6, #remove7, #remove8').focusin(function(){
		    $(this).attr('placeholder','');
		});
		$('#remove, #remove2, #remove3, #remove4, #remove5, #remove6, #remove7, #remove8').focusout(function(){
		    $(this).attr('placeholder',$(this).data('holder'));
		});


	})

});