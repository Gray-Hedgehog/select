o2.select = {
	handleToggle(event) {
		const selectList = event.target.closest('.select-1').querySelector('.select-1__list');
		const selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');

		selectList.classList.toggle('_active-list');
		selectIcon.classList.toggle('select-1__icon--open');
	},

	handleChoose(event) {
		const selectList = event.target.closest('.select-1').querySelector('.select-1__list');
		const selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');
		const selectInput = event.target.closest('.select-1').querySelector('.select-1__input');
		const selectInputHidden = event.target.closest('form').querySelector('._selected-value');
		const text = event.target.innerText;

		this.handleClose(selectList, selectIcon);
		selectInput.value = text;
		selectInputHidden.value = text;
	},

	handleClose(selectList, selectIcon) {
		selectList.classList.remove('_active-list');
		selectIcon.classList.remove('select-1__icon--open');
	},

	outsideClick(event) {
		const selectAll = document.querySelectorAll('.select-1');

		if (( event.target.closest('.select-1') !== null ) || (event.target.closest('.select-1__container') === null)){
			selectAll.forEach( function(element) {
				if (event.composedPath().includes(element) !== true) {
					element.querySelector('.select-1__list').classList.remove('_active-list');
					element.querySelector('.select-1__icon').classList.remove('select-1__icon--open');
				}
			});
		}
	},
};

window.addEventListener('click', event => o2.select.outsideClick(event));