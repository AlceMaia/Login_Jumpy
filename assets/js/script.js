const form = document.getElementsByClassName('.infos-itens');
const username = document.getElementById('#name');
const email = document.getElementById('#email');
const phone = document.getElementById('#phone');
const cpf = document.getElementById('#cpf');
const password = document.getElementById('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    registerInputs();
});

function registerInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const cpfValue = cpf.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        error(username, "*Campo Obrigatório*");
    } else {
        successRegister(username);
    }
    
    if (emailValue === '') {
        errorRegister(email, "*Campo Obrigatório*");
    } else {
        successRegister(email);
    }
    
    if (phoneValue === '') {
        errorRegister(phone, "*Campo Obrigatório*");
    } else {
        successRegister(phone);
    }
    
    if (cpfValue === '') {
        errorRegister(cpf, "*Campo Obrigatório*");
    } else {
        successRegister(cpf);
    }
    
    if (passwordValue === '') {
        errorRegister(password, "*Campo Obrigatório*");
    } else {
        successRegister(password);
    }
};

function errorRegister(input, message) {
    const inputInfo = input.parentElement;
    const main = inputInfo.querySelector('main');
    const register = document.querySelector('.validar');

    main.innerText = message;

    register.className = 'Register no-completed';
    register.innerText = 'Campos obrigatórios não registrados.';

    inputInfo.className = 'input-info error';
};

function successRegister(input) {
    const inputInfo = input.parentElement;
    const validate = document.querySelector('.validar');
    const span = inputInfo.querySelector('span');

    span.innerText = '';

    register.className = 'Register completed';
    register.innerText = 'Sucesso!';
    inputInfo.className = 'input-info';
};
