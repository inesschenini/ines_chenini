const menu = document.querySelector(".menu");
const uls = document.querySelector("header nav ul");
const lis = document.querySelectorAll("header nav ul li");

const toggleMe = ()=>{
    uls.classList.toggle("active")
}
menu.addEventListener("click",()=>{
    toggleMe()
})

lis.forEach(li => {
    li.addEventListener("click",()=>{
        toggleMe()
    })
});
const toggleImage = document.querySelector(".toggleImage");
const toggleImageImg = document.querySelector(".toggleImage img")
const uiux_projects = document.querySelectorAll(".uiux_project img");

const imageToggler = (src)=>{
    toggleImage.classList.toggle("active")
    toggleImageImg.src=src;
}
uiux_projects.forEach(el=>{
    el.addEventListener("click",()=>{
        imageToggler(el.src);
    })
})
toggleImage.addEventListener("click",()=>{
    imageToggler()
})

const observer = new IntersectionObserver(elements=>{
    elements.forEach(el=>{
        el.target.classList.toggle("show",el.isIntersecting)
        if(el.isIntersecting){
            observer.unobserve(el.target)
        }
    })
});
const observer2 = new IntersectionObserver(elements=>{
    elements.forEach(el=>{
        el.target.classList.toggle("showIn",el.isIntersecting)
        if(el.isIntersecting){
            observer2.unobserve(el.target)
        }
    })
});

const service_carts = document.querySelectorAll(".service_cart");
service_carts.forEach(cart=>{
    observer.observe(cart)
})

const the_image = document.querySelector(".the_image");
observer2.observe(the_image)

const tool_carts_container = document.querySelector(".tool_carts_container");
observer2.observe(tool_carts_container);

const p_project = document.querySelectorAll(".p_project");
p_project.forEach(project=>{
    observer.observe(project)
})