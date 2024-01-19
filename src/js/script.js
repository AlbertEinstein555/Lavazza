const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

if(hamburger){
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
}
if(closeElem){
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}



const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

if(counters){
    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
}


(function ($) {
    $(function () {
        $('.tabs__caption li').on('click', function(){
            let ul = $(this).parents('ul');

            ul.find('li').removeClass('active');

            $(this).addClass('active');
        });
    });
})(jQuery);
