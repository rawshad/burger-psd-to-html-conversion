$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  });

  for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
  }


 
  