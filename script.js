const submitBtn = document.querySelector('.submitBtn');
const input = document.getElementById('emailBox');
const errorText = document.querySelector('.errorText');
const wrapper = document.querySelector('.wrapper');
const thanks = document.querySelector('.thanksMsg');
const dismissBtn = document.querySelector('.dismissBtn');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();

    let value = input.value;

    function isValidEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    if (!isValidEmail(value)) {
        input.setAttribute('class', 'showError');
        errorText.classList.add('showError');
    } else {
        wrapper.classList.add('view');
        thanks.classList.add('view');
    };
});

dismissBtn.addEventListener('click', (e) => {
    e.preventDefault();

    wrapper.classList.remove('view');
    thanks.classList.remove('view');
});