const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toogle Nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
            link.style.animation = ``
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1.5}s`;
                console.log(index)
            }
       
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

    
}


navSlide();


