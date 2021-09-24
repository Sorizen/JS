const scrollSlowly = (ID) =>{
    document.getElementById(ID).scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
}

const linksHead = document.querySelectorAll(".menu-list__link");
linksHead.forEach(link=>{
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        const ID = event.target.getAttribute('href').substr(1);
        scrollSlowly(ID);
    })
})
document.querySelector(".main__scroll").addEventListener('click', (event)=>{
    event.preventDefault();
    const ID = event.target.getAttribute('href').substr(1);
    scrollSlowly(ID);
})