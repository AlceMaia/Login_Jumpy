const form = form[0].addEventListener;
const username = document.getElementById('for-name');
const email = document.getElementById('form-email');
const phone = document.getElementById('form-phone');
const cpf = document.getElementById('form-cpf');
const password = document.getElementById('form-password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    registerInputs();
});

function registerInputs() {
    const usernameValue = username.value();
    const emailValue = email.value();
    const phoneValue = phone.value();
    const cpfValue = cpf.value();
    const passwordValue = password();

    if(usernameValue === ''){
        error(username, "*Campo Obrigatório*");
    }else{
        successRegister(username);
    }
    
    if(emailValue === ''){
        errorRegister(email, "*Campo Obrigatório*");
    }else{
        successRegister(email);
    }
    
    if(phoneValue === ''){
        errorRegister(phone, "*Campo Obrigatório*");
    }else{
        successRegister(phone);
    }
    
    if(cpfValue === ''){
        errorRegister(cpf, "*Campo Obrigatório*");
    }else{
        successRegister(cpf);
    }
    
    if(passwordValue === ''){
        errorRegister(password, "*Campo Obrigatório*");
    }else{
        successRegister(password);
    }
}

function errorRegister(input, message) {
    const inputInfos = input.parentElement;
    const span = inputInfos.querySelector('span');
    const register = document.querySelector('validar');

    span.innerText = message;
    register.className = 'Register no-completed';
    register.innerText = 'Campo obrigatório não registrado';
    inputInfos.className = 'input-info error';
};

function successRegister(input) {
    const inputInfos = input.parentElement;
    const register = document.querySelector('.validar');
    const span = inputInfos.querySelector('span');

    span.innerText = '';

    register.className = 'Register completed';
    register.innerText = 'Sucesso!';
    inputInfos.className = 'input-info';
};
