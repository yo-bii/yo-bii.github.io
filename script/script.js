$(document).ready(function () {
    var a = 0;
    $(".mainmenu .sub").click(function () {
        if (a == 0) {
            $(".submenu").show();
            a = 1
        } else {
            $(".submenu").hide();
            a = 0
        }
    })
    //    $("#fp-nav ul li a.active span, #fp-nav ul li a.active span").click(function () {
    //        $("#fp-nav ul li a>span+span").removeClass("on1"); $(this).addClass("on1");
    //    })

})
