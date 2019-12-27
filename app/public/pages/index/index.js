'use strict';

import { setRating } from '../../components/ratingFiveStars.js';
let $starImages = document.querySelector('.rating-5-stars');
let $starInput = document.querySelector('.ally-rating__input');
$starImages.addEventListener('click', setRating);
$starImages.addEventListener('mousemove', setRating);
$starImages.addEventListener('mouseleave', setRating);
$starInput.addEventListener('input', setRating);

console.log('index.js is run');
