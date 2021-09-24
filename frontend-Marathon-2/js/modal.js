const modalBtn = document.querySelector('.more');
const modalWindow = document.querySelector('.modal');
modalBtn.addEventListener("click", ()=>{
    modalWindow.classList.remove("hidden");
})
modalWindow.addEventListener('click', (event)=>{
    if(event.target.classList.contains('overlay') || (event.target.classList.contains('modal__close'))){
        modalWindow.classList.add("hidden");
    }
})