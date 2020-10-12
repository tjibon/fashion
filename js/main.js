(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        $(".product-list").masonry()

        $('.product-promotion').owlCarousel({

            items: 1,
            autoplay: false,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,


        });

        $(".menu-trigger").on("click", function () {

            $(".off-canvar-menu, .off-canvar-overlay").addClass("active")
            return false;

        });

        $(".menu-close,.off-canvar-overlay").on("click", function () {

            $(".off-canvar-menu, .off-canvar-overlay").removeClass("active")
            

        })



    });



    jQuery(window).load(function () {

    });
}(jQuery));