let menutoggle = document.querySelector('.menu-toggle-btn');
let frame = document.querySelector('.center');
let menuListtoggle = document.querySelector('.menu-list')
let searchbtn = document.querySelector('.search-bar-toggle-btn');
let searchbar = document.querySelector('#search-bar');

menutoggle.onclick = function toggle() {
    frame.classList.toggle('fr-active')
    menuListtoggle.classList.toggle('ml-active')
}
searchbtn.onclick = function shclick() {
    searchbar.classList.toggle('sh-active')
}
