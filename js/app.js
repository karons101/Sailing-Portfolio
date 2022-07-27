$(document).ready(function(){

    //Preloader problem
       // $(window).on('load',function(){
       // $('.preloader').addClass('complete');
    //});
     
     
     $(window).on('scroll',function(){
         var scroll = $(window).scrollTop();
         if(scroll>=50){
             $(".sticky").addClass("stickyadd");
         }else{
             $(".sticky").removeClass("stickyadd");
         }
     })
 
         var typed = new Typed(".element",{ 
          strings: ["Anakpoha", "A Developer", "A Businessman"],
          smartBackspace:true,
          typeSpeed:100,
          backSpeed:100,
          loop:true,
          loopCount:Infinity,
          startDelay:1000
       
     });
 
 
     //Progress bars
 
     var waypoint = new Waypoint({
         element: document.getElementById('exp-id'),
         handler: function() {
             var p = document.querySelectorAll('.progress-bar');
             p[0].setAttribute("style", "width:100%; transition:1s all");
             p[1].setAttribute("style", "width:96%; transition:i.5s all");
             p[2].setAttribute("style", "width:88%; transition:1.7s all");
             p[3].setAttribute("style", "width:78%; transition:1.2s all");
             p[4].setAttribute("style", "width:69%; transition:2s all");
             p[5].setAttribute("style", "width:75%; transition:2.5s all");
             p[6].setAttribute("style", "width:70%; transition:2.4s all");
         },
           offset:'90%'
       });
 
       
       // Work Section
 
       var filterizd = $('.filter-container').filterizr({
         animationDuration :.9,
       });
 
       
       //owl carousel section
 
     $(".owl-carousel").owlCarousel({
             loop:true,
             autoplay:true,
             autoplayTimeout:4000,
             items:1
     });
 
 
 });