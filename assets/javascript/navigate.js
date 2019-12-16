$(document).ready(function () {
    // Add a function to scroll to the specific div
    $(".Navbar-AboutMe").click(function () {
        $('html, body').animate({
            scrollTop: $(".bd-example").offset().top
        }, 1000);
    });

    $(".Navbar-Projects").click(function () {
        $('html, body').animate({
            scrollTop: $(".GH-Container").offset().top
        }, 1000);
    });

    $(".Navbar-Contact").click(function () {
        $('html, body').animate({
            scrollTop: $(".C-Container").offset().top
        }, 1000);
    });
});