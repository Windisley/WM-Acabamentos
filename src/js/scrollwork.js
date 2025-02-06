const dataslidetranslate = document.querySelector("[data-slide-translate]");
const arrowleft = document.querySelector("[data-arrow-left]");
const arrowrigth = document.querySelector("[data-arrow-rigth]");

window.addEventListener("scroll", ()=>{
    const scrollwork = dataslidetranslate.getBoundingClientRect()

    if(scrollwork.top < window.innerHeight){
        dataslidetranslate.classList.add("carrosselwork")
        dataslidetranslate.classList.add("opacity-100")
        dataslidetranslate.classList.remove("opacity-0")

    }else{
        dataslidetranslate.classList.remove("opacity-100")
        dataslidetranslate.classList.add("opacity-0")
    }
})

let count = 0; 
const totalSlides = dataslidetranslate.children.length; 

        arrowleft.addEventListener("click", () => {
            if (count < totalSlides - 1) {
                count++;
                dataslidetranslate.style.transform = `translateX(${count * -20}%)`;
            }
        });
    
        arrowrigth.addEventListener("click", () => {
            if (count > 0) {
                count--;
                dataslidetranslate.style.transform = `translateX(${count * -20}%)`;
            }
        });


  


