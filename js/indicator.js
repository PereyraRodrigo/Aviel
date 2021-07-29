/* $(document).ready(function(){
    $('section').waypoint(function(direction) {
        //var activeSection = $(this).next();
        var activeSection = $(this);
        if(direction === 'down'){
            activeSection = $(this).next();
        }
        //activeSection = $(this);
        var sectionId   = activeSection.attr('id');
        $('ul li').removeClass('active');
        $('ul li.' + sectionId).addClass('active');
        console.log(activeSection);
    });
});	

$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
             scrollTop: target.offset().top - (target.height() / 5)
        }, 500);
        return false;
    }
}
}); */

/* const secciones = document.querySelectorAll('.seccion')
const menuItems = document.querySelectorAll('.menu_item')

const funcionObserver = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
            itemActual.classList.add ('active')
        }
    })
}

const observer = new IntersectionObserver(funcionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
})

secciones-forEach(seccion => observer.observe(seccion)) */