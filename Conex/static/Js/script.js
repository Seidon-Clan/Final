$(document).ready(function() {
    $(window).scroll(function () {
        if (this.scrollY > 70) {
            $(".nav-bar").css({"background": "crimson", "padding": "10px 0px"})
            $(".nav-bar .logo a span").css({"color": "black"});
        }
        else {
             $('.nav-bar').css({"background": "none", "padding": "30px 0px"});
             $(".nav-bar .logo a span").css({"color": "crimson"});
        }
        if (this.scrollY > 600) {
            $(".scroll-up-btn").css({"display": "block",})
        }
        else {
            $(".scroll-up-btn").css({"display": "none",})
        }
    });

    // scroll up button  
    $(".scroll-up-btn").click(function () {
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Create Websites","Design Brand Logos", "Develop Apps", "Promote Social Media Accounts", "Advertise products"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Create Websites", "Develop Apps", "Promote Social Media Accounts", "Advertise products"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(".fa-bars").click(function () {
        $(".nav-bar .menu").css({"left": "0%"});
        $(".fa-bars").hide();
        $(".menu-btn p").show();
    });
    $(".menu-btn p").click(function () {
        $(".nav-bar .menu").css({"left": "-100%"});
        $(".fa-bars").show();
        $(".menu-btn p").hide();
    });
    $(".nav-bar .menu li").click(function () {
        $(".nav-bar .menu").css({"left": "-100%"});
        $(".fa-bars").show();
        $(".menu-btn p").hide();
    });

    // owl carousel script 
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayhoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    });
});