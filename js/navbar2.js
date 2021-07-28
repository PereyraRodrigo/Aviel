/*NAVBAR contact section */

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar2').addClass('navbar__animation2');
        console.log("OK");
    } else {
        $('.navbar2').removeClass('navbar__animation2');
    }
});

$('.navTrigger2').click(function () {
    $(this).toggleClass('activ3');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});