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
//========== validation login form ==========
function valFromDataLogin(uName, pass) {
    for (let i of members.data) {
        if (uName.value === i.username && pass.value === i.password) {
            return true;
        } else {
            return false;
        }
    }
}
let dataMember = [];

// ========== validation Register ==========
function valInputData(name, uName, email, pass) {
    let i = {};
    i.name = name;
    i.username = uName;
    i.email = email;
    i.password = pass;
    return i;
}

// ========== Pass Data Member Object to Array ==========
function setDataMember() {
    dataMember.push(valInputData);
}


// ========== validation ==========
function validate() {
    if (login) {
        btnLogin.addEventListener('click', () => {
            if (valFromDataLogin(loginName, loginPass)) {
                dirLog.setAttribute('href', "./products/index.html");
            } else {
                document.querySelector('.warning').classList.remove('hide');
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