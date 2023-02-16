const selectInput = document.querySelector('.slt__input');
const selectInputHidden = document.querySelector('._selected-value')
const selectItems = document.querySelector('.slt__items');
const sltHeader =  document.querySelector('.slt__header');
const selectItem = document.querySelectorAll('.slt__item');
const slt = document.querySelector('.slt');
const selectIcon =  document.querySelector('.slt__icon');


function myOpen() {
	console.log(selectItems);
	selectItems.classList.add('_active-items');
}


function myClose() {
	selectItems.classList.contains('_active-items') ? selectItems.classList.remove('_active-items') : false;
	selectIcon.classList.contains('slt__icon--open') ? 	selectIcon.classList.remove('slt__icon--open') : false;
}

function myToggle() {
	selectItems.classList.toggle('_active-items');
	selectIcon.classList.toggle('slt__icon--open');
}

selectItem.forEach(item => {
	item.addEventListener('click', myChoose)
});

function myChoose() {
	let text = this.innerText;
	console.log("text ", text)
	myClose();

	selectInput.placeholder = text;
	selectInputHidden.placeholder = text;
}