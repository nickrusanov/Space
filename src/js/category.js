if (document.querySelector('.product')) {
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
}