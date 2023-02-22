o2.popup = {
	popupIconClose: document.querySelector('._popup-close'),
	popupOverlay: document.querySelector('._popup-overlay'),
	popupOpen(contentClass) {
		let contentHtml = document.querySelector(`.${contentClass}`).innerHTML;
		// console.log(popupHtml)
		this.popupOverlay.innerHTML = contentHtml;
		this.popupOverlay.classList.add('_popup-open');
	},
	popupClose(event) {
		this.popupOverlay.classList.remove('_popup-open')
	}
}