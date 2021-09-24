const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");
const titles = document.querySelectorAll(".design__title");
tabsHandlerElems.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        tabsHandlerElems.forEach(tabs=>{tabs.classList.remove('design-list__item_active')})
        btn.classList.add('design-list__item_active')
        tabsContentElems.forEach(content=>{
            if(content.dataset.tabsField === btn.dataset.tabsHandler){
                content.classList.remove('hidden');
                titles[0].classList.add('hidden');
                titles[1].classList.remove('hidden');
            }
            else{
                content.classList.add('hidden');
                titles[1].classList.add('hidden');
                titles[0].classList.remove('hidden');
            }
        })
    })
})
//btn.dataset.tabsHandler