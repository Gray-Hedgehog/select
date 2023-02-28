o2.tabs = {
	onTarget(event, tabId) {
		const items = document.querySelectorAll('.tabs__item');

		items.forEach( (element) => { element.classList.remove('_tab-active'); });
		event.target.closest('.tabs__item').classList.add('_tab-active');

		this.isContent(tabId);
	},

	isContent(tabId) {
		const tabsContent = document.querySelectorAll('.tabs__content');

		tabsContent.forEach( function(element) {
			if ( Number(element.dataset.tab) !== tabId ) {
				element.classList.remove('open');
			} else {
				element.classList.add('open');
			}
		});
	}
}