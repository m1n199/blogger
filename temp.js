!function () {
    const showNavbar = ($toggleId , $navId, $bodyId, $headerId, $contentId) => {
        // Validate that all variables exist
        if ($toggleId && $navId && $bodypdId && $headerId && $contentId) {
            $toggleId.on("click", () => {
                console.log($(this).text());
                // show navbar
                $navId.toggleClass('show');
                // change icon
                $toggleId.toggleClass('bx-x');
                // add padding to body
                // bodypd.classList.toggle('body-pd')
                // add padding to header
                $headerId.toggleClass('body-pd');
                $contentId.toggleClass('bg-light');
            });
        }
    }
}(jQuery);


document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId, contentId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId),
            content = document.getElementById(contentId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd && content) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                // bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
                content.classList.toggle('bg-light')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'content')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))
});