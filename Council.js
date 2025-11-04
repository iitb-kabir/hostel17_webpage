document.addEventListener('DOMContentLoaded', () => {
 

    const navLinks = document.querySelectorAll('.nav-link');
    
    const currentPath = window.location.pathname.split('/').pop().toLowerCase();
    
    // Determine the active page name (e.g., "sports" or "home")
    let activePage = currentPath.split('.')[0];
    if (activePage === 'home' || activePage === '') {
        activePage = 'home';
    }

    navLinks.forEach(link => {
        // Use the data-page attribute for comparison
        const linkPage = link.getAttribute('data-page').toLowerCase();

        if (linkPage === activePage) {
            // Apply active styles for desktop and mobile links
            link.classList.add('bg-teal-50', 'text-teal-700', 'font-extrabold');
            link.classList.remove('text-gray-700');
            link.classList.remove('hover:bg-teal-50'); 
            link.classList.remove('hover:text-teal-700'); 
        }
    });


    // -----------------------------------------------------------
    // 2. Mobile Hamburger Menu Toggle
    // -----------------------------------------------------------
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            
            // Toggle visibility
            mobileMenu.classList.toggle('hidden');
            
            // Toggle ARIA attributes
            menuButton.setAttribute('aria-expanded', !isExpanded);

            // Change icon (Hamburger <-> X)
            const icon = menuButton.querySelector('svg');
            if (isExpanded) {
                // Change X back to Hamburger
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />';
            } else {
                // Change Hamburger to X
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
            }
        });
    }

});

 