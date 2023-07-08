const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if(Number(inputEl.dataset.length) === inputEl.value.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});