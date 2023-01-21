if (document.querySelector('.product__filter-box')) {
	// PRICE

	const priceInputs = document.querySelectorAll('.product__price-input');
	const priceResets = document.querySelectorAll('.product__price-reset');

	priceInputs.forEach((input, i) => {
		input.addEventListener('keyup', () => {
			input.value.length > 0
				? priceResets[i].classList.add('product__price-reset--visible')
				: priceResets[i].classList.remove('product__price-reset--visible')
		})
	})

	priceResets.forEach((btn, i) => {
		btn.addEventListener('click', () => {
			priceInputs[i].value = '';
		})
	})


	// RATING

	const ratingBtn = document.querySelector('.product__rating-btn');
	const ratingBox = document.querySelector('.product__rating-box');
	const ratingLabels = document.querySelectorAll('.product__rating-label');
	const ratingDropIcon = document.querySelector('.product__drop-svg--rating');

	const ratingBoxShowToggle = () => {
		ratingBox.classList.toggle('product__rating-box--visible');
		ratingDropIcon.classList.toggle('product__drop-svg--rotate');
	}

	ratingBtn.addEventListener('click', ratingBoxShowToggle)

	ratingLabels.forEach((label, i) => {
		label.addEventListener('click', () => {
			ratingBoxShowToggle();
			ratingBtn.innerHTML = `<img class="product__rating-img product__rating-img--selected" src="./img/stars/stars-${i}.png"alt="rating: ${i}"><svg class="product__drop-svg product__drop-svg--rating" fill="currentColor" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L0 2.2496L2.33443 0L7 4.5008L11.6656 0L14 2.2496L7 9Z" /></svg>`
		})
	})
}