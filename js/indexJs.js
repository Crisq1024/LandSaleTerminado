document.getElementById('image3').addEventListener('click', function(event) {
    const menu = document.getElementById('menu3');
    
    if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
    } else {
        document.querySelectorAll('.menu').forEach(m => m.classList.remove('show-menu'));
        menu.classList.add('show-menu');
    }
});

document.addEventListener('click', event => {
    if (!event.target.classList.contains('toggle-menu')) {
        document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('show-menu'));
    }
});





