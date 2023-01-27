$(".header_menu").click(function() {
    $(this).toggleClass("active");
    $(".header_nav").slideToggle(300);
})

$(document).click(function (event) {
    var nav = $(".header_nav");
    var menu = $(".header_menu");
    if (!nav.is(event.target) && nav.has(event.target).length === 0) {
        if (!menu.is(event.target) && menu.has(event.target).length === 0) {
            if($(window).width() < 992) {
                $(".header_menu").removeClass("active");
                $(".header_nav").slideUp(300);
            }
        }
    }
});

$(window).on("resize scroll",function(){
    if($(window).scrollTop()>0 && $(window).width()>=992) {
        $(".header").addClass("scroll");
    }else {
        $(".header").removeClass("scroll");
    }
})