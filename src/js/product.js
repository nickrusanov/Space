if (document.querySelector('.product')) {

	// CATEGORY

	const categoryItems = document.querySelectorAll('.product__category-item');
	const moreBtn = document.querySelector('.product__more');
	const categoryButtons = document.querySelectorAll('.product__category-btn');
	const subcategoryLists = document.querySelectorAll('.product__subcategory-list');
	const dropIcons = document.querySelectorAll('.product__drop-svg');

	moreBtn.addEventListener('click', () => {
		categoryItems.forEach((item, index) => {
			if (index > 4) item.classList.toggle('product__category-item--hidden');
		})

		moreBtn.blur();

		categoryItems[categoryItems.length - 1].classList.contains('product__category-item--hidden')
			? moreBtn.innerHTML = 'Показать все'
			: moreBtn.innerHTML = 'Скрыть'
	})

	categoryButtons.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			subcategoryLists[index].classList.toggle('product__subcategory-list--hidden');
			dropIcons[index].classList.toggle('product__drop-svg--rotate');
		})
	})


	// FILTER - PRICE

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


	// FILTER - RATING

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


	// FAVORITE

	const favButtons = document.querySelectorAll('.product__item-fav');
	const favIcons = document.querySelectorAll('.product__item-fav-svg');

	favButtons.forEach((btn, i) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			favIcons[i].classList.toggle('product__item-fav-svg--active')
		})
	})


	// CART

	const cartButtons = document.querySelectorAll('.product__item-cart');
	const cartIcons = document.querySelectorAll('.product__item-cart-svg');

	cartButtons.forEach((btn, i) => {
		btn.addEventListener('click', (e) => {
			cartIcons[i].classList.toggle('product__item-cart-svg--active');
			cartCountShow(e);
		})
	})

	const cartCountShow = (e) => {
		const cartCounter = document.querySelectorAll('.product__item-cart-svg--active').length;
		const cartIconCount = document.getElementById('cart');

		e.preventDefault();

		if (cartCounter) {
			cartIconCount.classList.add('header__icon-counter--active');
			cartIconCount.innerHTML = cartCounter;
		} else {
			cartIconCount.classList.remove('header__icon-counter--active');
			cartIconCount.innerHTML = '';
		}
	}
}