const form = document.querySelector('.infos-itens');
const username = document.querySelector('#form-name');
const email = document.querySelector('#form-email');
const phone = document.querySelector('#form-phone');
const cpf = document.querySelector('#form-cpf');
const password = document.querySelector('#form-password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    registerInputs();
});

function registerInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const cpfValue = cpf.value;
    const passwordValue = password.value;

    if(usernameValue === ''){
        errorRegister(username, "*Campo Obrigatório*");
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
    const register = document.querySelector('.validar');

    span.innerText = message;

    register.className = 'validar no-completed';
    register.innerText = 'Campo obrigatório não registrado';

    inputInfos.className = 'form-formatting error';
};

function successRegister(input) {
    const inputInfos = input.parentElement;
    const register = document.querySelector('.validar');
    const span = inputInfos.querySelector('span');

    span.innerText = '';

    register.className = 'validar completed';
    register.innerText = 'Sucesso!';
    inputInfos.className = 'form-formatting';
};