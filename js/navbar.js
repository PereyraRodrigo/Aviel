$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav1').addClass('affix');
        console.log("OK");
    } else {
        $('.nav1').removeClass('affix');
    }
});    