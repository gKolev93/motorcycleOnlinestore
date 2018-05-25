$(document).ready(function() {
	slickSlider();
	brandsSlider();
});
function slickSlider() {

  $('.sliderImages').slick({
	infinite: true,
	dots: true,
	 arrows: false


  });
}

function brandsSlider() {

  $('.brandsSlider').slick({
	infinite: true,
  	slidesToShow: 2,
  	 arrows: true,
 	 slidesToScroll: 1


  });
}