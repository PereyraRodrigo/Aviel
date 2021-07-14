$('.navTrigger').click(function () {
    $(this).toggleClass('activ3');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});