$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });

    // Navbar styling on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('nav').addClass('navbar-scroll');
        } else {
            $('nav').removeClass('navbar-scroll');
        }
    });

    // Lightbox for the gallery images
    $('.gallery img').on('click', function() {
        const imgSrc = $(this).attr('src');
        const lightbox = `
            <div id="lightbox">
                <img src="${imgSrc}" alt="Gallery Image">
                <span id="close-lightbox">&times;</span>
            </div>
        `;
        $('body').append(lightbox);

        $('#close-lightbox').on('click', function() {
            $('#lightbox').remove();
        });
    });

    // Form submission with AJAX (modify with your own form handling logic)
    $('form').submit(function(event) {
        event.preventDefault();
        const form = $(this);
        const formData = form.serialize();
        // Add your AJAX code here to handle form submission and show a success message.

        // Example: Display a success message after submission
        form.html('<p class="success-message">Thank you for contacting us!</p>');
    });

    // Sliding event containers
    $('.carousel').carousel({
        interval: 5000, // Change the interval duration (milliseconds) as needed
        pause: 'hover' // Pause on hover
    });

    // Event registration button action (customize with your logic)
    $('.event-card .btn-primary').on('click', function(event) {
        event.preventDefault();
        // Add your event registration logic here, such as displaying a modal or redirecting to a registration page.
    });

    // Your additional JavaScript code for enhancing the website can go here.
});
