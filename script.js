const links = document.querySelectorAll("a");
const p = document.querySelector("p")

links.forEach(link => {
    link.addEventListener("click",(e)=>{
        links.forEach(link => {
            link.classList.remove("active");
            // link.nextElementSibling.classList.add("content")
        })
        link.classList.add("active");
        p.textContent = `This is ${link.textContent} content`
        // link.nextElementSibling.classList.remove("content")
    })

})

