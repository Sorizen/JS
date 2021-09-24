// envelope animation
window.onload = function(){
    var tl = new TimelineLite({delay: 1}),
      firstBg = document.querySelectorAll('.text1-bg'),
      secBg = document.querySelectorAll('.text2-bg'),
      word  = document.querySelectorAll('.text1');
    
    tl
      .to(firstBg, 0.2, {scaleX:1})
      .to(secBg, 0.2, {scaleX:1})
      .to(word, 0.1, {opacity:1}, "-=0.1")  
      .to(firstBg, 0.2, {scaleX:0})
      .to(secBg, 0.2, {scaleX:0})
      
      ;
    
  }

  //burger
$('.burger-botton-1').click(function(){
    $(this).toggleClass('active');
    let buttonClick = false;
    if($(this).hasClass('active')){
        buttonClick = true;
    }
    buttonClick = false;
    $('.burger-1').toggleClass('active');
});

//animate on scroll
$(function() {
    var rotation = 0, 
        scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += 0.5, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation + "deg)";
        $(".yellowTreangle").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += 0.1, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation + "deg)";
        $(".greenTreangle").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
})

$('.block-2-link-1').click(function(){
    $("#popupScrollWrapper").toggleClass('active');
    if($("#popupScrollWrapper").is(".active")){
        $("#popupScrollWrapper").css({"display": "block"});
    }
    $("#popupClose").click(function(){
        $("#popupScrollWrapper").css({"display": "none"});
    })
    $("#popupScrollWrapper").toggleClass('active');
    return false;
});
//delete this func
$("#popupClose").click(function(){
    $("#popupScrollWrapper").css({"display": "none"});
})
//delete this func

$('.block-2-content-2-content-1').click(function(){
    $("#popupScrollWrapper1").toggleClass('active');
    if($("#popupScrollWrapper1").is(".active")){
        $("#popupScrollWrapper1").css({"display": "block"});
    }
    $("#popupClose1").click(function(){
        $("#popupScrollWrapper1").css({"display": "none"});
    })
    $("#popupScrollWrapper1").toggleClass('active');
    return false;
});
$("#popupClose1").click(function(){
    $("#popupScrollWrapper1").css({"display": "none"});
})


$('.filter-header-label-1').click(function(){
    $('.filter-header-label-1').toggleClass('active');
    if($('.filter-header-label-1').hasClass('active')){
        $('.filter-header-label-1').css('color','var(--pink)');
    }
    else{
        $('.filter-header-label-1').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-2').click(function(){
    $('.filter-header-label-2').toggleClass('active');
    if($('.filter-header-label-2').hasClass('active')){
        $('.filter-header-label-2').css('color','var(--pink)');
    }
    else{
        $('.filter-header-label-2').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-3').click(function(){
    $('.filter-header-label-3').toggleClass('active');
    if($('.filter-header-label-3').hasClass('active')){
        $('.filter-header-label-3').css('color','var(--pink)');
    }
    else{
        $('.filter-header-label-3').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-4').click(function(){
    $('.filter-header-label-4').toggleClass('active');
    if($('.filter-header-label-4').hasClass('active')){
        $('.filter-header-label-4').css('color','var(--pink)');
    }
    else{
        $('.filter-header-label-4').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-5').click(function(){
    $('.filter-header-label-5').toggleClass('active');
    if($('.filter-header-label-5').hasClass('active')){
        $('.filter-header-label-5').css('color','var(--pink)');
        $('.filter-header-label-6').removeClass('active').css('color','var(--textGrey)');
        $('.filter-header-label-7').removeClass('active').css('color','var(--textGrey)');

    }
    else{
        $('.filter-header-label-5').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-6').click(function(){
    $('.filter-header-label-6').toggleClass('active');
    if($('.filter-header-label-6').hasClass('active')){
        $('.filter-header-label-6').css('color','var(--pink)');
        $('.filter-header-label-5').removeClass('active').css('color','var(--textGrey)');
        $('.filter-header-label-7').removeClass('active').css('color','var(--textGrey)');
    }
    else{
        $('.filter-header-label-6').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-7').click(function(){
    $('.filter-header-label-7').toggleClass('active');
    if($('.filter-header-label-7').hasClass('active')){
        $('.filter-header-label-7').css('color','var(--pink)');
        $('.filter-header-label-5').removeClass('active').css('color','var(--textGrey)');
        $('.filter-header-label-6').removeClass('active').css('color','var(--textGrey)');
    }
    else{
        $('.filter-header-label-7').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-8').click(function(){
    $('.filter-header-label-8').toggleClass('active');
    if($('.filter-header-label-8').hasClass('active')){
        $('.filter-header-label-8').css('color','var(--pink)');
    }
    else{
        $('.filter-header-label-8').css('color','var(--textGrey)');
    }
})
$('.filter-header-label-9').click(function(){
    $('.filter-header-label-9').toggleClass('active');
    if($('.filter-header-label-9').hasClass('active')){
        $('.filter-header-label-9').css('color','var(--pink)');
    }
    else{
        $('.filter-header-label-9').css('color','var(--textGrey)');
    }
})
$('.filter-subheader-label-1').click(function(){
    $('.filter-subheader-label-1').toggleClass('active');
    if($('.filter-subheader-label-1').hasClass('active')){
        $('.filter-subheader-label-1').css('color','var(--pink)');
    }
    else{
        $('.filter-subheader-label-1').css('color','var(--textGrey)');
    }
})
$('.filter-subheader-label-2').click(function(){
    $('.filter-subheader-label-2').toggleClass('active');
    if($('.filter-subheader-label-2').hasClass('active')){
        $('.filter-subheader-label-2').css('color','var(--pink)');
    }
    else{
        $('.filter-subheader-label-2').css('color','var(--textGrey)');
    }
})
$('.filter-subheader-label-3').click(function(){
    $('.filter-subheader-label-3').toggleClass('active');
    if($('.filter-subheader-label-3').hasClass('active')){
        $('.filter-subheader-label-3').css('color','var(--pink)');
    }
    else{
        $('.filter-subheader-label-3').css('color','var(--textGrey)');
    }
})