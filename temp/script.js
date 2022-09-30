!function () {

        $('#header-toggle').on("click", () => {
            //to-know sidebar is active ?
            $('body').toggleClass('is-sidebar');
            // // close .sidebar-content div if it was open
            // if (!$('.sidebar-content').hasClass('close-sidebar-content')) $('.sidebar-content').addClass('close-sidebar-content');
            // // show navbar when bar clicked and make bg dark
            // if ($('#nav-bar').toggleClass('show').hasClass('show')) $('#content').removeClass('bg-light');
            // else $('#content').addClass('bg-light');
            // // change bars icon to cross
            // $('#header-toggle').toggleClass('bx-x');
            // // add padding to header
            // $('#header').toggleClass('body-pd');
        });
    
    /*===== LINK ACTIVE =====*/
    $('.nav_link').each( function(){
        $(this).on("click",() => {
            $('.nav_link.active').removeClass('active');
            $(this).addClass('active');
            if ($('.sidebar-content').hasClass('close-sidebar-content')) $('.sidebar-content').removeClass('close-sidebar-content');
            if ($('#content').hasClass('bg-light')) $('#content').removeClass('bg-light');
            // $('.sidebar-content .widget')[$(this).index()].addClass('display');


        })
        
    });
}(jQuery);
