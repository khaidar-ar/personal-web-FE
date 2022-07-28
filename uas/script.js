import {
    members
} from './member.js';

const loginName = document.querySelector('#loginName');
const loginPass = document.querySelector('#loginPassword');
const regName = document.querySelector('#registerName');
const regUname = document.querySelector('#registerUsername');
const regEmail = document.querySelector('#registerEmail');
const regPass = document.querySelector('#registerPassword')
const formControl = document.querySelectorAll('.form-control .login');
const login = document.querySelector('#tab-login');
const register = document.querySelector('#tab-register');
const btnLogin = document.querySelector('#login');
const btnReg = document.querySelector('#register');
const dirLog = document.querySelector('.direct-log')

function valFromDataLogin(uName, pass) {
    for (let i of members.data) {
        if (uName.value === i.username && pass.value === i.password) {
            return true;
        } else {
            return false;
        }
    }
}

function valInputData(name, uName, email, pass) {
    let i = members.data;
    i.name = name;
    i.username = uName;
    i.email = email;
    i.password = pass;
    return i;
}

function validate() {
    if (login) {
        btnLogin.addEventListener('click', () => {
            if (valFromDataLogin(loginName, loginPass)) {
                dirLog.setAttribute('href', "./products/index.html");
                console.log('sukses');
            } else {
                console.log('failed');
            }
        })
    }
    if (register) {
        btnReg.addEventListener('click', () => {
            members.data.push(valInputData(regName, regUname, regEmail, regPass));
        })
    }
}



validate();