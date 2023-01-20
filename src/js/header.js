// SEARCH MOBILE

const searchBtn = document.querySelector('.search__btn');
const search = document.querySelector('.search');
const header = document.querySelector('.header');

searchBtn.addEventListener('click', () => {
	search.classList.toggle('search--mobile-hide');
	header.classList.toggle('header--mobile-hide');
})


// THEME CHANGE

const themeSystemBtn = document.getElementById('theme-system-btn');
const themeLightBtn = document.getElementById('theme-light-btn');
const themeDarkBtn = document.getElementById('theme-dark-btn');
const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');
const menuThemeText = document.getElementById('theme-text');
const logo = document.querySelector('.header__logo-link');

const themeSet = (mode) => {
	if (!localStorage.getItem('theme'))
		mediaDark.removeEventListener('change', systemThemeModeSet);

	localStorage.setItem('theme', mode);

	if (mode === 'dark') {
		document.documentElement.classList.add('darkmode');
		menuThemeText.innerHTML = 'Тема: тёмная';
		logo.innerHTML = '<picture><source srcset="./img/logo-darkmode.webp" type="image/webp"><img class="header__logo" src="./img/logo-darkmode.png" alt="logo"></picture>';
	} else {
		document.documentElement.classList.remove('darkmode');
		menuThemeText.innerHTML = 'Тема: светлая';
		logo.innerHTML = '<picture><source srcset="./img/logo.webp" type="image/webp"><img class="header__logo" src="./img/logo.png" alt="logo"></picture>';
	}
}

const systemThemeSet = () => {
	systemThemeModeSet();
	menuThemeText.innerHTML = 'Тема: как у системы';

	if (localStorage.getItem('theme')) {
		localStorage.removeItem('theme');
		mediaDark.addEventListener('change', systemThemeModeSet);
	}
}

const systemThemeModeSet = () => {
	if (mediaDark.matches) {
		document.documentElement.classList.add('darkmode')
		logo.innerHTML = '<picture><source srcset="./img/logo-darkmode.webp" type="image/webp"><img class="header__logo" src="./img/logo-darkmode.png" alt="logo"></picture>';
	} else {
		document.documentElement.classList.remove('darkmode');
		logo.innerHTML = '<picture><source srcset="./img/logo.webp" type="image/webp"><img class="header__logo" src="./img/logo.png" alt="logo"></picture>';
	}
}

const themeIconCreat = () => {
	let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('class', 'header__theme-icon');
	svg.setAttribute('viewBox', '0 0 24 24');
	svg.innerHTML = '<path d="M23 5.78747L7.91429 21L1 14.0276L2.77257 12.2401L7.91429 17.4124L21.2274 4L23 5.78747Z"/>'
	return svg;
}

const themeSetByBtn = (e) => {
	if (document.querySelector('header__theme-icon')) {
		document.querySelector('header__theme-icon').remove();
	}

	if (themeLightBtn.contains(e.target)) {
		themeSet('light');
		menuClose();
		themeLightBtn.prepend(themeIcon);
		return;
	}

	if (themeDarkBtn.contains(e.target)) {
		themeSet('dark');
		menuClose();
		themeDarkBtn.prepend(themeIcon);
		return;
	}

	if (themeSystemBtn.contains(e.target)) {
		systemThemeSet();
		menuClose();
		themeSystemBtn.prepend(themeIcon);
		return;
	}
}

const themeInit = () => {
	if (localStorage.getItem('theme') === 'dark') {
		document.documentElement.classList.add('darkmode');
		menuThemeText.innerHTML = 'Тема: тёмная';
		themeDarkBtn.prepend(themeIcon);
		logo.innerHTML = '<picture><source srcset="./img/logo-darkmode.webp" type="image/webp"><img class="header__logo" src="./img/logo-darkmode.png" alt="logo"></picture>';
		return;
	}

	if (localStorage.getItem('theme') === 'light') {
		menuThemeText.innerHTML = 'Тема: светлая';
		themeLightBtn.prepend(themeIcon);
		logo.innerHTML = '<picture><source srcset="./img/logo.webp" type="image/webp"><img class="header__logo" src="./img/logo.png" alt="logo"></picture>';
		return;
	}

	mediaDark.addEventListener('change', systemThemeModeSet);
	themeSystemBtn.prepend(themeIcon);

	systemThemeModeSet();
}

const themeIcon = themeIconCreat();

themeInit();


// MENU MODAL

const menuArray = document.querySelectorAll('.header__menu');
const menuMain = document.getElementById('menu-main');
const menuTheme = document.getElementById('menu-theme');
const avatarBtn = document.querySelector('.header__avatar-btn');
const themeBtn = document.getElementById('theme-btn');
const backBtn = document.querySelector('.header__back-btn');

let menuCurrentId;

const menuOpen = () => {
	menuArray[menuCurrentId = 0].classList.add('header__menu--open');
	document.addEventListener('click', menuClickCheck);
	document.addEventListener('keydown', menuKeyCheck);
}

const menuClose = () => {
	menuArray[menuCurrentId].classList.remove('header__menu--open');
	document.removeEventListener('click', menuClickCheck);
	document.removeEventListener('keydown', menuKeyCheck);
}

const menuClickCheck = (e) => {
	if (!menuArray[menuCurrentId].contains(e.target) && !avatarBtn.contains(e.target)) {
		menuClose();
		return;
	}

	if (backBtn.contains(e.target)) {
		menuArray[menuCurrentId].classList.remove('header__menu--open');
		setTimeout(() => menuArray[menuCurrentId = 0].classList.add('header__menu--open'), 200)
		return;
	}

	if (themeBtn.contains(e.target)) {
		menuArray[menuCurrentId].classList.remove('header__menu--open');
		setTimeout(() => menuArray[menuCurrentId = 1].classList.add('header__menu--open'), 200);
		return;
	}

	if (menuArray[1].contains(e.target)) {
		themeSetByBtn(e);
	}
}

const menuKeyCheck = (e) => {
	if (e.keyCode === 27) {
		menuClose();
	}
}

avatarBtn.addEventListener('click', () => {
	document.querySelectorAll('.header__menu--open').length === 0
		? menuOpen()
		: menuClose();
})