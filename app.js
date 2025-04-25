const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 200)
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};



const sr = ScrollReveal({
    distance:'40px',
    duration:2050,
    delay:200,
    reset:true

});
sr.reveal('.hero-text,.home-img img',{origin:'top'});
sr.reveal('.about-img,.service-item,.about-text',{origin:'bottom'});
sr.reveal('.about-text h2,.text-center,.right-contact h2,.row',{origin:'top'});
sr.reveal('.left-contact',{origin:'left'});
sr.reveal('.right-contact',{origin:'right'});
sr.reveal('.end-section',{origin:'top'});




document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stops the form from reloading the page

    const responseMsg = document.getElementById("responseMsg");
    responseMsg.textContent = "Your request has been sent.";
    responseMsg.style.display = "block";

    // Optionally reset the form
    this.reset();

    // Optionally hide the message after a few seconds
    setTimeout(() => {
        responseMsg.style.display = "none";
    }, 5000);
});