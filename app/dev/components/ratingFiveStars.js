'use strict';

let $allyInput = document.querySelector('.ally-rating__input');
// поле ввода рейтинга с клавиатуры

export /**
 * Определяет тип переданного события
 *
 * @deprecated <pre>
 * В зависимости от события определяет каким образом был введен рейтинг.
 * После чего считывает пользовательский ввод
 * и запускает вывод на экран.
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

	// === если событие - наведение мышью
	if (event.type == 'mousemove') {
		// === если наведение на звезду звездам
		if ($target.classList.contains('star') == true) {
			let $onHoverNumberStar = event.target.dataset.numStar;
			// на какую звезду наведение

			displayStar($onHoverNumberStar, 'hover');
		}
	}

	// === если событие - покидание мышью границ блока
	if (event.type == 'mouseleave') {
		displayStar(0, 'leave');
	}
};

/**
 * Выводит на экран рейтинг
 *
 * @deprecated <pre>
 * Принимает числовое значение рейтинга.
 * На основе чего закрашивает количество звезд равное рейтингу.
 * Затем очищает остальные звезды (на случай изменения рейтинга пользователем).
 * Также при наведении на звезду подкрашивает предыдущие звезды.
 * </pre>
 * @param {number} rating - рейтинг от 1 до 5
 */
const displayStar = (rating, hover) => {
	$allyInput.value = rating;
	// записать в input значение равное номеру звезды

	// === перебор всех звезд
	for (let i = 1; i <= 5; i++) {
		let $star = document.querySelector(`.star[data-num-star="${i}"]`);

		// === если событие не является наведением мыши ========================
		if (hover == undefined) {
			if (i <= rating) {
				// установка класса .star_fill на звезды до клика включительно
				$star.classList.add('star_fill');
			} else {
				// удаление класса .star_fill со всех звезд после клика
				$star.classList.remove('star_fill');
			}
		}

		// === если событием является наведением мыши ==========================
		if (hover == 'hover') {
			if (i < rating) {
				// установка класса .star_hover на звезды до клика
				$star.classList.add('star_hover');
			} else {
				$star.classList.remove('star_hover');
			}
		}

		// === если событием является покидание мышью родительского блока ======
		if (hover == 'leave') {
			// удаление класса .star_hover со всех звезд
			$star.classList.remove('star_hover');
		}
	}
};
