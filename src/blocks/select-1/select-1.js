o2.select = {
	handleToggle(event) {
		let selectItems = event.target.closest('.select-1').querySelector('.select-1__items');
		let selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');
		selectItems.classList.toggle('_active-items');
		selectIcon.classList.toggle('select-1__icon--open');
	},

	handleChoose(event) {
		let selectItems = event.target.closest('.select-1').querySelector('.select-1__items');
		let selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');
		let selectInput = event.target.closest('.select-1').querySelector('.select-1__input');
		let selectInputHidden = event.target.closest('form').querySelector('._selected-value');
		let text = event.target.innerText;
		this.handleClose(selectItems, selectIcon);

		selectInput.value = text;
		selectInputHidden.value = text;
	},

	handleClose(selectItems, selectIcon) {
		selectItems.classList.remove('_active-items');
		selectIcon.classList.remove('select-1__icon--open');
	},

	windowClose(event) {
		const selectActiveItemsAll = document.querySelectorAll('._active-items');
		const selectOpenIcon = document.querySelector('.select-1__icon--open');

		const selectAll = document.querySelectorAll('.select-1');
		const selectItemsAll = document.querySelectorAll('.select-1__items');



		selectActiveItemsAll.forEach((element) => {
			if (element.classList.contains('_active-items')) {
				element.classList.remove('_active-items');
			}
		});

		console.log(event.composedPath())

		console.log(event.composedPath().includes('.select-1__header'))
		if ( event.target.closest('select-1__header') == true ) {
			console.log('if')
			let selectItems = event.target.closest('.select-1').querySelector('.select-1__items');
			let selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');
			selectItems.classList.toggle('_active-items');
			selectIcon.classList.toggle('select-1__icon--open');
		}
	},
};

window.addEventListener('click', event => o2.select.windowClose(event));