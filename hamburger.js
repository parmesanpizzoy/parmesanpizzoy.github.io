function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Optional: Prevent scrolling when menu is open
    document.body.classList.toggle('no-scroll');
}