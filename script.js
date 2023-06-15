$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Web Developer", " Graphic Designer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", " Graphic Designer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // form submission script

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxAf0-8jRHCCv5hrAhWhPgZ5Sg_vH91OAYCQUJSmRkcvrna9zIWEx9Rq-l5eKzWHFYXTg/exec'
    const form = document.forms['atul']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })
});
