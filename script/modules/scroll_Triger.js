export function scroll_Triger() {
    window.addEventListener('load', function() {
        gsap.registerPlugin(ScrollTrigger);
    
        const imagesContainer = document.getElementById('portfolio');
        if (imagesContainer) {
            const scrollWidth = imagesContainer.scrollWidth - document.documentElement.clientWidth;
    
            gsap.to(imagesContainer, {
                x: '-300',
                ease: "none",
                scrollTrigger: {
                    trigger: ".portfolio-block",
                    start: "top left",
                    end: "bottom left",
                    scrub: 1,
                }
            });
        } 
    });
    new WOW().init();
}