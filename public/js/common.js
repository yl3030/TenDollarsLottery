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

let img;
$(".btn_changePic").change(function(e) {
    img = $(".banner-member_pic_main");
    readURL(e.target);
})
function readURL(input) {
    if(input.files && input.files[0]){
        let reader = new FileReader();
        reader.onload = function (e) {
            img.attr('src', e.target.result);
            img.css("opacity", "1");
        }
        reader.readAsDataURL(input.files[0]);
    }   
}

$(".modal_input-num_btn").click(function(){
    let num = $(this).parents(".modal_input-num_content").children("input").val();
    let numInt;
    if(num<=0 || num=="") {
        numInt = 0;
    }else {
        numInt = parseInt(num);
    }
    console.log(numInt);
    if($(this).hasClass("minus")) {
        if(numInt <= 0) {
            numInt = 0;
        }else {
            numInt = numInt - 1;
        }
    }else if($(this).hasClass("plus")) {
        numInt = numInt + 1;
    }
    $(this).parents(".modal_input-num_content").children("input").val(numInt);
})