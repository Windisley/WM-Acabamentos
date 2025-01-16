const menu = document.querySelector("[data-menu]")
const line1 = document.querySelector("[data-line1]")
const line2 = document.querySelector("[data-line2]")
const line3 = document.querySelector("[data-line3]")
const $nav = document.querySelector("[data-nav]")
const $body = document.querySelector("body")

menu.addEventListener("click", ()=>{
    line1.classList.toggle("left-[48%]")
    line2.classList.toggle("left-[60%]")
    line3.classList.toggle("left-[48%]")

    $nav.classList.toggle("translate-x-full")
   
})


const carrosselServicos = document.querySelector("[data-translate]")
const  arrowLeft = document.querySelector("[data-arrowLeft]")
const  arrowRight = document.querySelector("[data-arrowRight]")

let count = 0

arrowLeft.addEventListener("click", ()=>{
    
    
    if(count > 0){
        count--
        carrosselServicos.style.transform = `translateX(${count * -48}%)`
        console.log(count)
    }

  
})

arrowRight.addEventListener("click", ()=>{

    if(count <= 4 -1){
    count++
    carrosselServicos.style.transform = `translateX(${count * -45}%)`
       
    }
})







