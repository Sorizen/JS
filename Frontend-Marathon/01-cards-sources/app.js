const clearActiveClasses = (slides) => {
    for (const slide of slides) {
        slide.classList.remove("active");
    }
}
const onClickHandler = (slides) =>{
    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses(slides);
            slide.classList.add("active");
        })
    }
}
const funcClideNum = (numOfActiveSlide) => {
    const slides = document.querySelectorAll(".slide");
    if (numOfActiveSlide < slides.length) {
        slides[numOfActiveSlide].classList.add("active");
        onClickHandler(slides);
    }
    else{
        slides[0].classList.add("active");
    }
}
funcClideNum(2)