const changeSlide = (direction) =>{
    if(direction === 'up'){
        activeSlideIndex = activeSlideIndex + 1;
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0;
        }
    }
    else{
        activeSlideIndex = activeSlideIndex - 1;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount-1;
        }
    }
    const containerHeight = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex*containerHeight}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex*containerHeight}px)`
}
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount-1)*100}vh`;
downButton.addEventListener("click", ()=>{
    changeSlide('down');
})
upButton.addEventListener("click", ()=>{
    changeSlide('up');
})