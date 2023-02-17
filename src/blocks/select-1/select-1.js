o2.select = {
	select: document.querySelector('.select-1'),
	selectInput: document.querySelector('.select-1__input'),
	selectInputHidden: document.querySelector('._selected-value'),
	selectItems: document.querySelector('.select-1__items'),
	selectIcon:  document.querySelector('.select-1__icon'),

	handleClose(event) {
		this.selectItems.classList.remove('_active-items');
		this.selectIcon.classList.remove('select-1__icon--open');
	},

	windowClose(event) {
		const hundleClick = event.composedPath().includes(this.select);

		if ( hundleClick == false ) {
			this.selectItems.classList.remove('_active-items');
			this.selectIcon.classList.remove('select-1__icon--open');
		}
	},

	handleToggle() {
		this.selectItems.classList.toggle('_active-items');
		this.selectIcon.classList.toggle('select-1__icon--open');
	},

	handleChoose(event) {
		let text = event.target.innerText;
		this.handleClose();
		this.selectInput.value = text;
		this.selectInputHidden.value = text;
		console.log(this.selectInputHidden.value);
	}
};

window.addEventListener('click', event => o2.select.windowClose(event));