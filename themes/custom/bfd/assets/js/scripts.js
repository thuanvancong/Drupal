var firstload = true;
(function($) {
	Drupal.behaviors.script = {
		attach: function(context, settings) {
			this.actionPages(context);

			if(firstload == true){
				this.actionTrigger(context);
			}
			firstload = false;
		},
		actionPages: function(context) {
			var swiper;
			var slider = $(".swiper");

			if (slider.length > 0) {
				slider.each(function() {
					var target = $(this);
					var slidePerView = target.data("slide-per-view") || 4;
					var spaceSlide = target.data("space") || 30;

					swiper = new Swiper('.' + target.attr("data-id"), {
				      slidesPerView: slidePerView,
				      spaceBetween: spaceSlide,
				    });
				});
			}

		    $(".category-item").click(function() {
		      var categori_id = $(this).attr('data-val');
		      var formExposed = $("form#views-exposed-form-page-product-page-1");
		      formExposed.find(".form-select").val(categori_id).change();
		      formExposed.find(".form-submit").trigger("click");
		      setTimeout(function(){
		      	$(".category-item[data-val=" + categori_id + "]").addClass("active");
		      }, 500);
		    });
		},
		actionTrigger: function(context) {
			
		},
		
	};

})(jQuery);