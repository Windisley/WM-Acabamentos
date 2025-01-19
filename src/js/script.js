const menu = document.querySelector("[data-menu]")
const line1 = document.querySelector("[data-line1]")
const line2 = document.querySelector("[data-line2]")
const line3 = document.querySelector("[data-line3]")
const $nav = document.querySelector("[data-nav]")
const $body = document.querySelector("body")
const copyright = document.querySelector("[data-copyright]")
const logo = document.querySelector("[data-logo]")

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

menu.addEventListener("click", ()=>{
    line1.classList.toggle("left-[48%]")
    line2.classList.toggle("left-[60%]")
    line3.classList.toggle("left-[48%]")

    $nav.classList.toggle("translate-x-full")
   
})

const anoAtual = new Date().getFullYear();

copyright.innerHTML = `WM Acabamentos copyright@${anoAtual}`

const servicosscroll = document.querySelectorAll("[data-servicosscroll]")

servicosscroll.forEach((svc)=>{

    window.addEventListener("scroll", ()=>{
        const scroll = svc.getBoundingClientRect()
        if(scroll.top < window.innerHeight){
            svc.classList.add("translate-y-0")
            svc.classList.remove("translate-y-2/4")
            svc.classList.add("opacity-100")
            
        }else{
            svc.classList.remove("translate-y-0")
            svc.classList.add("translate-y-2/4")
            svc.classList.remove("opacity-100")
            
        }
    })
    
    
})
const depoimentosscroll = document.querySelector("[data-elfsight-app-lazy]")

window.addEventListener("scroll", ()=>{
   
    const scrolldp = depoimentosscroll.getBoundingClientRect()
    
    if(scrolldp.top < window.innerHeight){
       
            depoimentosscroll.classList.add("translate-y-0")
            depoimentosscroll.classList.remove("translate-y-2/4")
            depoimentosscroll.classList.add("opacity-100")
            
        }else{
            depoimentosscroll.classList.remove("translate-y-0")
            depoimentosscroll.classList.add("translate-y-2/4")
            depoimentosscroll.classList.remove("opacity-100")
            
        }

})















