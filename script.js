const hamburger = document.querySelector('.btn');
const nav = document.querySelector('.navbar');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', function() {
    if(nav.style.display === 'none' || nav.style.display === ''){
        nav.style.display = 'flex';
        hamburger.style.top = '10%'
    } else {
        nav.style.display = 'none'
        hamburger.style.top = '1%'
    }
});

$('.nav-link').on('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    // Get the target section's ID from the href attribute
    var target = $(this).attr('href');
    
    // Scroll to the target section
    $('html, body').animate(
        {
            scrollTop: $(target).offset().top,
        },
        800 // Animation duration in milliseconds
    );
});
