// var hover_box = $('.sevice__box__single')
// hover_box.mouseover(function () {
//     hover_box.removeClass('active');
//     $(this).addClass('active');
// });

// >Backgroung image scroling right function by = jquery.bgscroll.js		
function bg_image_moving() {
    jQuery(function () {
        jQuery('.bg-image-moving').bgscroll({ scrollSpeed: 20, direction: 'h' });
    });
}

$('.my-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.my-testimonials').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});






$('.service-slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    items: 1,
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
        }
    }

});


$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
        }
    }

});

$(window).scroll(function () {
    if ($(window).scrollTop() > 10)
        $('.header__bottom').addClass('header__fixed');
    else
        $('.header__bottom').removeClass('header__fixed');
});

//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}