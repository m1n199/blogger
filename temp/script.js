!function () {

        $('#header-toggle').on("click", () => {
            //to set operation for sidebar when it's open through CSS...
            //to close sidebar-content when side bar is closed 
            if (!$('body').toggleClass('is-sidebar').hasClass('is-sidebar') && $('body').hasClass('is-sidebarIcon')) 
                $('body').removeClass('is-sidebarIcon');
        });
    
    /*===== LINK ACTIVE =====*/
    $('.nav_link').click(function(){
            $('.sidebar-content .widget')
                .removeClass('display');

            $('.sidebar-content .widget')
                .eq($(this).index())
                .addClass('display');
            
            if($(this).hasClass('active')) {
                $('body')
                    .removeClass('is-sidebarIcon');
                $(this).removeClass('active');
            }
            else {
                $('body')
                    .addClass('is-sidebarIcon');
                $('.nav_link').removeClass('active');
                $(this).addClass('active');
            }
    });
}(jQuery);
