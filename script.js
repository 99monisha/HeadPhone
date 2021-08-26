$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass("sticky");
        }
        else{
            $('.nav').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
         }
         else{
            $('.scroll-up-btn').removeClass("show");
         }
    });


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
        

$('.menu-btn').click(function(){
    $('.nav .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
});
