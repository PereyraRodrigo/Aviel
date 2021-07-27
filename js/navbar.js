$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('navbar__animation');
        console.log("OK");
    } else {
        $('.navbar').removeClass('navbar__animation');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('activ3');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});