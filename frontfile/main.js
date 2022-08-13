const toggleBtn = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.navmenu');
const icons = document.querySelector('.navright');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});