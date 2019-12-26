'use strict';

let $allyInput = document.querySelector('.ally-rating__input');
// поле ввода рейтинга с клавиатуры

export /**
 * Определяет тип переданного события
 *
 * @deprecated <pre>
 * В зависимости от события определяет каким образом был введен рейтинг.
 * После чего считывает пользовательский ввод.
 * И запускает вывод на экран.
 * </pre>
 * @param {object} event
 */
const setRating = function(event) {
	let $target = event.target;

	// === если событие - клик
	if (event.type == 'click') {
		// === если клик по звездам
		if ($target.classList.contains('star') == true) {
			let $onClickNumberStar = event.target.dataset.numStar;
			// по какой звезде был клик

			displayStar($onClickNumberStar);
		}
	}

	// === если событие - ввод с клавиатуры
	if (event.type == 'input') {
		let $inputRating = event.target.value;
		// какой рейтинг введен с клавиатуры

		displayStar($inputRating);
	}
};

/**
 * Выводит на экран рейтинг
 *
 * @deprecated <pre>
 * Принимает числовое значение рейтинга.
 * На основе чего закрашивает количество звезд равное рейтингу.
 * И очищает остальные звезды (на случай изменения рейтинга пользователем).
 * </pre>
 * @param {number} rating - рейтинг от 1 до 5
 */
const displayStar = rating => {
	$allyInput.value = rating;
	// записать в input значение равное номеру звезды

	// === перебор всех звезд
	for (let i = 1; i <= 5; i++) {
		let $star = document.querySelector(`.star[data-num-star="${i}"]`);

		if (i <= rating) {
			// установка класса .star_fill на все звезды до клика
			$star.classList.add('star_fill');
		} else {
			// удаление класса .star_fill со всех звезд после клика
			$star.classList.remove('star_fill');
		}
	}
};
