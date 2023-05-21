const Nav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    Nav.classList.toggle('active');
};

const mb = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!mb.contains(e.target) && !Nav.contains(e.target)) {
        Nav.classList.remove('active');
    }
});
