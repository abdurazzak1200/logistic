$(function () {

    $("#suggestions__item_active_first").click(function () {
       $("#suggestions__item_first").css("display", "block");
       $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $("#suggestions__item_active_second").click(function () {
        $("#suggestions__item_second").css("display", "block");
        $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $("#suggestions__item_active_third").click(function () {
        $("#suggestions__item_third").css("display", "block");
        $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $("#suggestions__item_active_fourth").click(function () {
        $("#suggestions__item_fourth").css("display", "block");
        $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $("#suggestions__item_active_fifth").click(function () {
        $("#suggestions__item_fifth").css("display", "block");
        $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $("#suggestions__item_active_sixth").click(function () {
        $("#suggestions__item_sixth").css("display", "block");
        $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $("#suggestions__item_active_seventh").click(function () {
        $("#suggestions__item_seventh").css("display", "block");
        $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $("#suggestions__item_active_ninth").click(function () {
        $("#suggestions__item_ninth").css("display", "block");
        $(".wrapper_filtre").css("filter", "blur(5px)");
    });

    $(".modal__close").click(function () {
       $("#suggestions__item_first").css("display", "none");
       $("#suggestions__item_second").css("display", "none");
       $("#suggestions__item_third").css("display", "none");
       $("#suggestions__item_fourth").css("display", "none");
       $("#suggestions__item_fifth").css("display", "none");
       $("#suggestions__item_sixth").css("display", "none");
       $("#suggestions__item_seventh").css("display", "none");
       $("#suggestions__item_ninth").css("display", "none");
       $(".wrapper_filtre").css("filter", "none");
    });
});