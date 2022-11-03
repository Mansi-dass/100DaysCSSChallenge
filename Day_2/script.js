let menutoggle = document.querySelector('.bar-wrapper');
menutoggle.onclick = function () {
    menutoggle.classList.toggle('active');
    let removeAnimation = document.querySelectorAll('.no-animation');
    for (var i = 0; i < removeAnimation.length; i++) {
        removeAnimation[i].classList.remove('no-animation');
    }
}