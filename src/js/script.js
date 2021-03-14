//Burger-menu
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      links = document.querySelectorAll('.menu__link');

function openMenu () {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

hamburger.addEventListener('click', openMenu);

function closeMenu () {
    menu.classList.remove('active');
    document.body.style.overflow = 'visible';
}

closeElem.addEventListener('click', closeMenu);

menu.addEventListener('click', (e) => {
    if(e.target === overlay) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
    }
});

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});


//Skills counter
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


//Mailer
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('form').trigger('reset');
    });
    return false;
});




//Scroll
const upElem = document.querySelector('.pageup');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
            upElem.style.opacity = '1';
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
            upElem.style.opacity = '0';
        }
    });

    let upLinks = document.querySelectorAll('[href^="#"]'),
        speed = 0.1;
    
    upLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

