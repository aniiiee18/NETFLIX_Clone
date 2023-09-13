const faqs = document.querySelectorAll(".faq");
const ansti = document.querySelectorAll(".que");

faqs.forEach(faq => {
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active");
    });
});