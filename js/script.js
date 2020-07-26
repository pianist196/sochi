// ArrowUp

document.querySelector('.arrowUp').onclick = function scrollUpFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.querySelector('.arrowUp').style.display = 'block';
    } else {
        document.querySelector('.arrowUp').style.display = 'none';
    }
}
