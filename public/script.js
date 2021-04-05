console.log("hola")

// Header carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    navigation : true, // Show next and prev buttons
    dots: true,
    singleItem:true,
    autoWidth:false,
    // autoHeight:true,
    // autoHeightClass: 'owl-height',
    loop:true,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:5000,
    items:1
  })
  });