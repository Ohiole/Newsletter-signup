# Frontend Mentor - Newsletter sign up with success message main solution

This is a solution to the [Newsletter sign up with success message main on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot


![Screenshot 2023-06-01 at 11-49-13 Frontend Mentor Newsletter sign-up form with success message](https://github.com/Ohiole/Newsletter-signup/assets/67792211/feb5fb3f-bebe-42c8-a539-78f0f39bb180)

### Links

- Solution URL: [Add solution URL here](https://github.com/Ohiole/Newsletter-signup/)
- Live Site URL: [Add live site URL here](https://ohiole.github.io/Newsletter-signup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

 I learnt about the test method on javascript which is used to test if a particular input follows a pattern.

```js
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

```

### Continued development
I want to learn about more of javascripts methods, because there a lot of useful ones.

### Useful resources

- [Youtube](https://www.youtube.com) - This helped me with the TEST method on Js

## Author

- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
- Twitter - [@__ojoo](https://www.twitter.com/__ojoo)
