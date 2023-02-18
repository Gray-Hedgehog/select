o2.select = {
	// select: undefined,
	// selectInput: document.querySelector('.select-1__input'),
	// selectInputHidden: document.querySelector('._selected-value'),
	// selectItems: null,
	// selectIcon:  null,

	handleClose(selectItems, selectIcon) {
		selectItems.classList.remove('_active-items');
		selectIcon.classList.remove('select-1__icon--open');
	},

	windowClose(event, select) {
		// // let boolSelect = event.target.closest('.select-1').querySelector('');
		// console.log(event, selectItems);
		const hundleClick = event.composedPath().includes(select);
		console.log(select);
		if (  ) {
			selectItems.classList.remove('_active-items');
			selectIcon.classList.remove('select-1__icon--open');
		}
	},

	handleToggle(event) {
		// select = event.target.;
		// console.log(select);
		let select = event.closest('.select-1');
		let selectItems = event.target.closest('.select-1').querySelector('.select-1__items');
		// console.log(selectItems);
		let selectIcon  = event.target.closest('.select-1').querySelector('.select-1__icon');
		this.windowClose(selectItems, select);
		selectItems.classList.toggle('_active-items');
		selectIcon.classList.toggle('select-1__icon--open');
	},

	handleChoose(event) {
		let selectInput = event.target.closest('.select-1').querySelector('.select-1__input');
		let selectInputHidden = event.target.closest('form').querySelector('._selected-value');
		let text = event.target.innerText;
		this.handleClose(selectItems, selectIcon);
		selectInput.value = text;
		selectInputHidden.value = text;
	}
};

window.addEventListener('click', event => o2.select.windowClose(event, o2.select.selectItems));