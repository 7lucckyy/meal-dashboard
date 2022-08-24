(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#d8eb34";
    Chart.defaults.borderColor = "#000000";




    // Salse & Revenue Chart
    


    // Single Line Chart
    
    
    //NHF Dashboard
    // var ctx7 = $("#worldwide-sales1").get(0).getContext("2d");
    // var myChart7 = new Chart(ctx7, {
    //     type: "bar",
    //     data: {
    //         labels: ["November 21", "December 21", "January", "February", "March", "April", "May"],
    //         datasets: [{
    //                 label: "No. of Children Benefited from PSS",
    //                 data: [30, 30, 55, 65, 70, 60, 75],
    //                 backgroundColor: "rgba(235, 22, 22, .7)"
    //             },
    //             {
    //                 label: "No of UASC Identified",
    //                 data: [29, 25, 60, 50, 70, 55, 70],
    //                 backgroundColor: "rgba(235, 22, 22, .5)"
    //             },
    //             {
    //                 label: "No. of UASC Placed in Alt care",
    //                 data: [12, 25, 45, 55, 65, 70, 60],
    //                 backgroundColor: "rgba(235, 22, 22, .3)"
    //             }
    //         ]
    //         },
    //     options: {
    //         responsive: true
    //     }
    // });

    
})(jQuery);

