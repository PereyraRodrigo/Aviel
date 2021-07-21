$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('navbar__animation');
        console.log("OK");
    } else {
        $('.navbar').removeClass('navbar__animation');
    }
});    