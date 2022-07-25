const formControl = document.querySelectorAll('.form-control .login');
const logBtn = document.querySelector('.btn-login');
const regBtn = document.querySelector('.btn-regis');

function loginOrRegist() {

    if (logBtn) {
        logBtn.addEventListener('click', () => {
            location.assign('prod.html');
        })
    }
    if (regBtn) {
        logBtn.addEventListener('click', () => {
            location.assign('prod.html');
        })
    }

}


loginOrRegist();