const formsubmit = document.querySelector("[data-formsubmit]");
const inputname = document.querySelector("[data-inputname]");

formsubmit.addEventListener("submit", (e) => {

    e.preventDefault();
    const inputvalue = inputname.value;

    alert(`Obrigado, ${inputvalue}! Recebemos sua demanda e em breve entraremos em contato.`);

    formsubmit.submit()
});