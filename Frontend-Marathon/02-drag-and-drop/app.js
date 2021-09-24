const item = document.querySelector(".item");
item.addEventListener("dragstart", (event)=>{
    console.log(event.target)
    event.target.classList.add("hold")
    setTimeout(()=>{
        event.target.classList.add("hide")
    }, 0)
})
item.addEventListener("dragend", (event)=>{
    event.target.classList.remove("hold", "hide")
})
const placeholders = document.querySelectorAll(".placeholder");
for (const placeholder of placeholders){
    placeholder.addEventListener("dragover", (event)=>{
        console.log("dragover")
        event.preventDefault()
    })
    placeholder.addEventListener("dragenter", (event)=>{
        console.log("dragenter")
        event.target.classList.add("hovered")
    })
    placeholder.addEventListener("dragleave", (event)=>{
        console.log("dragleave")
        event.target.classList.remove("hovered");
    })
    placeholder.addEventListener("drop", (event)=>{
        console.log("drop")
        event.target.append(item)
        event.target.classList.remove("hovered");
    })
}

