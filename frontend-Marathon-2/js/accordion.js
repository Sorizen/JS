const hide = () =>{
    lists.forEach((list, index) => {
        list.classList.add("hidden");
    })
}
const buttonsAccordion = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");
for (let i = 0; i < buttonsAccordion.length; i++) {
    buttonsAccordion[i].addEventListener('click', () => {
        if (buttonsAccordion[i].classList.contains("feature__link_active")) {
            buttonsAccordion[i].classList.remove("feature__link_active");
            hide();
        } else {
            for(const button of buttonsAccordion){
                button.classList.remove("feature__link_active");
            }
            buttonsAccordion[i].classList.add("feature__link_active");
            hide();
            lists[i].classList.remove("hidden");
        }
    })
}
