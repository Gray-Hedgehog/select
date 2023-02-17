o2.select = {
	select: document.querySelector('.select-1'),
	selectHeader:  document.querySelector('.select-1__header'),
	selectInput: document.querySelector('.select-1__input'),
	selectInputHidden: document.querySelector('._selected-value'),
	selectItems: document.querySelector('.select-1__items'),
	selectItem: document.querySelectorAll('.select-1__item'),
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
		this.selectInput.placeholder = text;
		this.selectInputHidden.placeholder = text;
	}
}

window.addEventListener('click', event => o2.select.windowClose(event))