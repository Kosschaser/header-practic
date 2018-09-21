$(document).ready(function(){
	$('#sl-carousel').slick({
		adaptiveHeight: true,
		autoplay:false,
		dots:true,
		autoplay: false,
		autoplaySpeed: 1000,
		dotsClass: 's-dots',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [{
				breakpoint: 420,
				settings: {
					dots: false
				}
			}]
	})
});