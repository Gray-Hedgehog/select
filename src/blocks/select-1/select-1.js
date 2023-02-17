const select = document.querySelector('.select-1');
const selectHeader =  document.querySelector('.select-1__header');
const selectInput = document.querySelector('.select-1__input');
const selectInputHidden = document.querySelector('._selected-value')
const selectItems = document.querySelector('.select-1__items');
const selectItem = document.querySelectorAll('.select-1__item');
const selectIcon =  document.querySelector('.select-1__icon');


function handleClose(event) {
	selectItems.classList.remove('_active-items');
	selectIcon.classList.remove('select-1__icon--open');
}

function windowClose(event) {
	const hundleClick = event.composedPath().includes(select);

	if ( hundleClick == false ) {
		selectItems.classList.remove('_active-items');
		selectIcon.classList.remove('select-1__icon--open');
	}
}

function handleToggle() {
	selectItems.classList.toggle('_active-items');
	selectIcon.classList.toggle('select-1__icon--open');
}

function handleChoose(event) {
	let text = event.target.innerText;
	handleClose();
	selectInput.placeholder = text;
	selectInputHidden.placeholder = text;
}

window.addEventListener('click', event => windowClose(event))