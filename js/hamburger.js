(function () {
    function toggleMenu() {
        $('.bar').toggleClass('animate');
        $('.navbar-hamburger-menu').toggleClass('navbar-hamburger-menu-active');
        $('body').toggleClass('overflowHidden');
    }

    $('.hamburger-menu').on('click', function () {
        toggleMenu();
    });
    $('.hamburger-link').on('click', function () {
        toggleMenu();
    });
})();


