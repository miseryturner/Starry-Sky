$(document).ready(function () {
    $('.services-slider').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        centerMode: false,
        infinite: true,
        slidesToScroll: 4,
        speed: 700,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        touchThreshold: 10,
        responsive: [{
        breakpoint: 996,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }],
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});