(function () {
    function toggleMenu() {
        $('.bar').toggleClass('animate');
        $('.navbar-hamburger-menu').toggleClass('navbar-hamburger-menu-active');
    }

    $('.hamburger-menu').on('click', function () {
        toggleMenu()
    });
    $('.hamburger-link').on('click', function () {
        toggleMenu()
    });
})();


