$(document).ready(function () {

    /* Sticky navigation */
    $('.js--sct-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Scroll on buttons */
    $('.js--scroll-work').click(function () {
        $('html, body').animate({scrollTop: $('.js--sct-work').offset().top}, 1000);
    });

    $('.js--scroll-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--sct-about').offset().top}, 1000);
    });



    /* ----- Navigation scroll ----- */

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });


    /* ---- Animation on scroll ---- */
    /* https://daneden.github.io/animate.css/ */
    $('.js--animation-btn').waypoint(function(direction) {
        $('.js--animation-btn').addClass('animated swing');
    }, {
        offset: '100%'
    })

    $('.js--animation-about').waypoint(function(direction) {
        $('.js--animation-about').addClass('animated fadeInUp');
    }, {
        offset: '40%'
    })

    $('.js--animation-h2-skills').waypoint(function(direction) {
        $('.js--animation-h2-skills').addClass('animated rotateIn');
    }, {
        offset: '80%'
    })


    /* --- Mobile navigation --- */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
    })
    

    /* ---- GALLERY SLIDESHOW --- */
    $(function() {
        $(".rslides").responsiveSlides();
    });

});

/* Тест --> дали jQuery работи
    
     $('h1').click(function() {
        $(this).css('background-color', '#ff0000');
    })
*/