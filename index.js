$(document).ready(function () {
    var currentSlideIndex = 0;
    var sliderChangeTimer;
    var sliderSpeed = 500;
    var numberOfSlides = 3;

    var welcomeTexts = [
        'Welcome to BINO',
        'Welcome To CINO',
        'Welcome to DINO',
    ];
    var $welcomeElement = $('.welcome-content h1')[0];

    $('.slideshow').slick({
        dots: true,
        dotsClass: 'slideshow-dots',
        nextArrow: '<button class="button-next"><div class="button-next_icon"></div></button>',
        prevArrow: '<button class="button-prev"><div class="button-prev_icon"></div></button>',
        speed: sliderSpeed
    });


    $('button.button-next').click(function (event) {
        console.log('click-next');

        if (sliderChangeTimer == null) {
            sliderChangeTimer = setTimeout(function () {
                currentSlideIndex++;
                currentSlideIndex = currentSlideIndex % numberOfSlides;
                console.log(currentSlideIndex);
                $welcomeElement.innerHTML = welcomeTexts[currentSlideIndex];
                sliderChangeTimer = null;
            }, sliderSpeed);
        }

    });

    $('button.button-prev').click(function (event) {
        console.log('click-prev');

        if (sliderChangeTimer == null) {
            sliderChangeTimer = setTimeout(function () {
                currentSlideIndex--;
                if (currentSlideIndex < 0) {
                    currentSlideIndex = currentSlideIndex + numberOfSlides;
                }
                console.log(currentSlideIndex);
                $welcomeElement.innerHTML = welcomeTexts[currentSlideIndex];
                sliderChangeTimer = null;
            }, sliderSpeed);
        }


    });

    var links = document.querySelectorAll('.nav-menu li a');
    var selectedLink = document.querySelectorAll('.nav-menu li a.active')[0];
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            selectedLink.classList.remove('active');
            var target = event.target;
            target.classList.add('active');
            selectedLink = target;
        })
    }
});