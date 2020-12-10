$(document).ready(function () {

    /*Offers slider https://kenwheeler.github.io/slick/*/
    $(".offers-slides").slick({
        centerMode: true
        , centerPadding: '60px'
        , slidesToShow: 3
        , responsive: [{
            breakpoint: 990
            , settings: {
                arrows: false
                , centerMode: true
                , centerPadding: '40px'
                , slidesToShow: 2
                }
            },
            {
            breakpoint: 770
            , settings: {
                arrows: false
                , centerMode: true
                , centerPadding: '40px'
                , slidesToShow: 1
                }
            }]
    });

    /*clients slider https://kenwheeler.github.io/slick/*/
    $(".feedback-slides").slick({
        centerMode: true
        , centerPadding: '60px'
        , slidesToShow: 2
        , responsive: [{
            breakpoint: 990
            , settings: {
                arrows: true
                , centerMode: true
                , centerPadding: '40px'
                , slidesToShow: 1
                }
            },
            {
            breakpoint: 575
            , settings: {
                arrows: false
                , centerMode: false
                , centerPadding: '40px'
                , slidesToShow: 1
                }
            }]
    });
});
