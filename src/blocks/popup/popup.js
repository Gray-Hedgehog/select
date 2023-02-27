o2.popup = {
	popupOverlay: document.querySelector('._popup-overlay'),
	popupOpen(contentClass) {
		let contentHtml = document.querySelector(`.${contentClass}`).innerHTML;
		this.popupOverlay.innerHTML = contentHtml;
		this.popupOverlay.classList.add('_popup-open');
	},
	popupClose(event) {
		this.popupOverlay.classList.remove('_popup-open')
	},

	outsideClick(event) {
		const openClass = document.querySelector('._popup-open');
		const boolOpen = event.composedPath().includes(openClass);
		const collectionLenth = event.composedPath().length;

		if ((boolOpen == true) && (collectionLenth === 6)) {
			this.popupClose(event);
		}
	}
}

window.addEventListener('click', (event) => { o2.popup.outsideClick(event) });