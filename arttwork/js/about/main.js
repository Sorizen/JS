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
$('.burger-button').click(function(){
    $(this).toggleClass('active');
    let buttonClick = false;
    if($(this).hasClass('active')){
        buttonClick = true;
    }
    if(buttonClick){
        setTimeout(() =>{
            $('.hidden').hide();
        }, 450)
    }
    else{
        $('.hidden').show();
    }
    buttonClick = false;
    $('.burger').toggleClass('active');
});
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
