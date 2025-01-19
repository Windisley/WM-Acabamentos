const formsubmit = document.querySelector("[data-formsubmit]");
const inputname = document.querySelector("[data-inputname]");

formsubmit.addEventListener("submit", (e) => {

    e.preventDefault();
    const inputvalue = inputname.value;

    alert(`Obrigado, ${inputvalue}! Recebemos sua demanda e em breve entraremos em contato.`);

    formsubmit.submit()
});


window.addEventListener("scroll", ()=>{
    const scrollform = formsubmit.getBoundingClientRect()
    
    if(scrollform.top < window.innerHeight){
       
         formsubmit.classList.add("translate-y-0")
         formsubmit.classList.remove("translate-y-2/4")
         formsubmit.classList.add("opacity-100")
            
        }else{
         formsubmit.classList.remove("translate-y-0")
         formsubmit.classList.add("translate-y-2/4")
         formsubmit.classList.remove("opacity-100")
            
        }
})