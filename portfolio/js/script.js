$(function() {
	function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2); };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});
	 // Modal
 $("[data-modal]").on("click", function(event) {
	event.preventDefault();
	let modalID = $(this).data("modal");
	$(modalID).addClass("show");
	$("body").addClass("no-scroll");

}); 

$("[data-close]").on("click", function(event) {
	event.preventDefault();
	let modalParent = $(this).parents(".modal");
	modalParent.removeClass("show");
	$("body").removeClass("no-scroll");
}); 

$(".modal").on("click", function(event) {
	$(this).removeClass("show");
	$("body").removeClass("no-scroll");
});

$(".modal__dialog").on("click", function(event) {
	event.stopPropagation()
});



	// Filter
	$("[data-filter]").on("click", function(event) {
		event.preventDefault();

		let cat = $(this).data("filter");

		if(cat == "all"){
			$("[data-cat]").removeClass("hide");
		}else{
			$("[data-cat]").each(function() {
			let workCat = $(this).data("cat");

			if(cat != workCat) {
				$(this).addClass("hide");
			}else{
				$(this).removeClass("hide");
			}
			});
		}
	});



	// Modal
	// Modal Open
	$("[data-modal]").on("click", function(event) {
		event.preventDefault();
		let modalId = $(this).data("modal");
		$(modalId).addClass("show");
		$("body").addClass("no-scroll");

		$('[data-slider="slick"]').slick('setPosition');
	});

	// Modal Close
	$("[data-close]").on("click", function(event) {
		event.preventDefault();
		let modalParent = $(this).parents(".modal");
		$(modalParent).removeClass("show");
		$("body").removeClass("no-scroll");
	});
	$(".modal").on("click", function() {
		$(this).removeClass("show");
		$("body").removeClass("no-scroll");
	});
	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation();
	});
	


	// Slider https://kenwheeler.github.io/slick/
	$('[data-slider="slick"]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
  	});
	$(".slickPrev").on("click", function(event) {
		event.preventDefault();

		$(this).parents(".modal").find('[data-slider="slick"]').slick("slickPrev");
	});
	$(".slickNext").on("click", function(event) {
		event.preventDefault();

		$(this).parents(".modal").find('[data-slider="slick"]').slick("slickNext");
	});



	// Menu Nav Toggle
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$("#nav").toggleClass("show");
	});

});