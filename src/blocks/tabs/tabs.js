o2.tabs = {
	onTarget(event) {
		const items = document.querySelectorAll('.tabs__item');

		items.forEach( (element) => { element.classList.remove('_tab-active'); })
		event.target.closest('.tabs__item').classList.add('_tab-active');
	}
}