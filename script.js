document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const topBar = document.querySelector('.top-bar');
    const currentYear = new Date().getFullYear();
    
    // Calculate the threshold for sticking (approximate height of top bar)
    // or just use a small value to trigger the animation as soon as scrolling starts.
    const scrollThreshold = 40; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('sticky-active');
        } else {
            navbar.classList.remove('sticky-active');
        }
    });
});
