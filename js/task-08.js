const formEl = document.querySelector('.login-form');

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if(email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені !');
    }

    const formValue = {
        email: email.value,
        password: password.value,
    };

    console.log(formValue);
    event.currentTarget.reset();
}

formEl.addEventListener('submit', handleSubmit);


