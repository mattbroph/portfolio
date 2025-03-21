// Keeps track of which Nav link was last clicked so it can be underlined

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');

    function handleLinkClick(event) {
        // Remove the 'activePage' class from all links
        navLinks.forEach(function (link) {
            link.classList.remove('activePage');
        });

        // Add the 'activePage' class to the clicked link
        event.target.classList.add('activePage');
    }

    // Add click event listeners to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', handleLinkClick);
    });
});