o2.select = {
	handleToggle(event) {
		const selectItems = event.target.closest('.select-1').querySelector('.select-1__items');
		const selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');
		selectItems.classList.toggle('_active-items');
		selectIcon.classList.toggle('select-1__icon--open');
	},

	handleChoose(event) {
		const selectItems = event.target.closest('.select-1').querySelector('.select-1__items');
		const selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');
		const selectInput = event.target.closest('.select-1').querySelector('.select-1__input');
		const selectInputHidden = event.target.closest('form').querySelector('._selected-value');
		const text = event.target.innerText;
		this.handleClose(selectItems, selectIcon);

		selectInput.value = text;
		selectInputHidden.value = text;
	},

	handleClose(selectItems, selectIcon) {
		selectItems.classList.remove('_active-items');
		selectIcon.classList.remove('select-1__icon--open');
	},

	outsideClick(event) {
		const selectAll = document.querySelectorAll('.select-1');
		const openClassAll = document.querySelectorAll('._active-items');
		const openIconAll = document.querySelectorAll('.select-1__icon--open');

		if (( event.target.closest('.select-1') !== null ) || (event.target.closest('.select-1__container') === null)){
			selectAll.forEach( function(element) {
				if (event.composedPath().includes(element) !== true) {
					element.querySelector('.select-1__items').classList.remove('_active-items');
					element.querySelector('.select-1__icon').classList.remove('select-1__icon--open');
				}
			});
		}
	},
};

window.addEventListener('click', event => o2.select.outsideClick(event));