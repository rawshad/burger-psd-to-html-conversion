
$(document).ready(function(){
    $('.js--services-section').waypoint(function(direction){
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }) 
    var mixer = mixitup('.container');
});

// var containerEl = document.querySelector('.container');

//             var mixer = mixitup(containerEl);



 
  