o2.popup = {
	popupOverlay: document.querySelector('._popup-overlay'),
	popupOpen(contentClass) {
		const body = document.querySelector('body');
		let contentHtml = document.querySelector(`.${contentClass}`).innerHTML;
		body.style.overflow = 'hidden';
		this.popupOverlay.innerHTML = contentHtml;
		this.popupOverlay.classList.add('_popup-open');
	},
	popupClose() {
		const body = document.querySelector('body');
		body.style.overflow = 'visible';
		this.popupOverlay.classList.remove('_popup-open')
	},

	outsideClick(event) {
		const openClass = document.querySelector('._popup-open');
		const boolOpen = event.composedPath().includes(openClass);
		const collectionLenth = event.composedPath().length;

		if ((boolOpen == true) && (collectionLenth === 6)) {
			this.popupClose(event);
		}

		this.setEscEvent();
	},

	setEscEvent(event)
	{
		window.onkeydown = (event) => { (event.key === 'Escape') && (this.popupClose()) };
	},
}

window.addEventListener('click', (event) => { o2.popup.outsideClick(event) });