'use strict';

import { setRating } from '../../components/ratingFiveStars.js';
let $starClick = document.querySelector('.rating-5-stars');
let $starInput = document.querySelector('.ally-rating__input');
$starClick.addEventListener('click', setRating);
$starInput.addEventListener('input', setRating);

console.log('index.js is run');
