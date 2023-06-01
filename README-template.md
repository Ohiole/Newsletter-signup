# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
