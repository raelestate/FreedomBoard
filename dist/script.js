const lenis = new Lenis();
let scrollLogTimeout;
lenis.on('scroll', (e) => {
clearTimeout(scrollLogTimeout);
scrollLogTimeout = setTimeout(() => {
    console.log(e);
}, 100); 
ScrollTrigger.update(); 
});
gsap.ticker.add((time) => {
lenis.raf(time * 1000); 
});
gsap.ticker.lagSmoothing(0);

document.addEventListener('DOMContentLoaded', () => {
    // Check if "Freedom Board" exists in the body
    if (document.body.textContent.includes('Freedom Board')) {
        console.log('The phrase "Freedom Board" was detected in the body.');

        // Replace occurrences of "Freedom Board" with bold text
        document.body.innerHTML = document.body.innerHTML.replace(/\bFreedom Board\b/g, '<strong class="cust-bold">Freedom Board</strong class="cust-bold">');
        document.body.innerHTML = document.body.innerHTML.replace(/\bRael\b/g, '<strong class="cust-bold">Rael</strong class="cust-bold">');
        document.body.innerHTML = document.body.innerHTML.replace(/\bEstate\b/g, '<strong class="cust-bold">Estate</strong class="cust-bold">');
        document.body.innerHTML = document.body.innerHTML.replace(/\bRael Estate\b/g, '<strong class="cust-bold">Rael Estate</strong class="cust-bold">');
    }
    const currentUrl = window.location.pathname;
    const links = document.querySelectorAll('ul li a');
  
    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
        link.classList.add('current-page');
        }
  });
});

window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            start: "top center 75%",
            end: "center 25%",
            scrub: 1,
            markers: false,
        },
    });
    tl.to(".slogan_video video", {
        scale: 1.44,
        ease: "power2.in",
        duration: 2,
    }, 0)
    .to(".slogan_info", {
        scale: .655,
        ease: "power2.in",
        duration: 2,
    }, 0); 
});


