



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


function newprod() {

  $('.newprod').slick({
  infinite: true,
  dots: false,
  arrows: true,
   slidesToShow: 4,
  slidesToScroll: 1


  });
}


function freqprod() {

  $('.freqprod').slick({
  infinite: true,
  dots: false,
  arrows: true,
   slidesToShow: 4,
  slidesToScroll: 1


  });
}

    






function openCity(evt, cityName) {
    var i, tabcontent, tablinks;


    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";


}

// Get the element with id="defaultOpen" and click on it
function defaultOpen(){
document.getElementById("defaultOpen").click();
}

$(document).ready(function() {
  defaultOpen();
  newprod();
  freqprod();
  slickSlider();
  brandsSlider();
  first();
  openCity();



});