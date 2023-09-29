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

    // Lightbox for the gallery images
    $('.img-fluid').on('click', function() {
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

    // Card hover effect
    $('.card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Event registration button action (customize with your logic)
    $('.event-card .btn-primary').on('click', function(event) {
        event.preventDefault();
        // Add your event registration logic here.
    });

    // Your additional JavaScript code for enhancing the website can go here.
});
