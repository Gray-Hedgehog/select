o2.popup = {
	popupOverlay: document.querySelector('._popup-overlay'),
	/**
	 * [popupOpen - method for open popup]
	 * @param  {[string]} contentClass [selector for searching a content]
	 */
	popupOpen(contentClass) {
		/**
		 * [body - document body]
		 * @type {[teg]}
		 */
		const body = document.querySelector('body');
		/**
		 * [contentHtml - variable for saving a html]
		 * @type {[object]}
		 */
		let contentHtml = document.querySelector(`.${contentClass}`).innerHTML;
		body.style.overflow = 'hidden';
		/**
		 * [innerHTML method for accepting markup ]
		 * @type {[object]}
		 */
		this.popupOverlay.innerHTML = contentHtml;
		/**
		 * add class for open popup
		 */
		this.popupOverlay.classList.add('_popup-open');
	},
	/**
	 * [popupClose method to close popup]
	 */
	popupClose() {
		const body = document.querySelector('body');
		body.style.overflow = 'visible';
		this.popupOverlay.classList.remove('_popup-open')
	},
	/**
	 * [outsideClick - method to check outside click ]
	 */
	outsideClick() {
		const openClass = document.querySelector('._popup-open');
		const boolOpen = event.composedPath().includes(openClass);
		const collectionLenth = event.composedPath().length;

		if ((boolOpen == true) && (collectionLenth === 6)) {
			this.popupClose();
		}

		this.setEscEvent();
	},

	setEscEvent()
	{
		window.onkeydown = () => { (event.key === 'Escape') && (this.popupClose()) };
	},
}

window.addEventListener('click', () => { o2.popup.outsideClick(event) });