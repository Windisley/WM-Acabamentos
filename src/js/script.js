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












