o2.slider = {
	slider: null,
	sliderLine: null,
	dots: null,
	count: 0,
	width: 0,

	init() {
		this.slider = document.querySelectorAll('.slider__container .slider__line img');
		this.sliderLine = document.querySelector('.slider__container .slider__line');
		this.dots = document.getElementsByClassName("slider__dot");
		console.log('resize');
		this.width = document.querySelector('.slider__container').offsetWidth;
		this.sliderLine.style.width = this.width * this.slider.length + 'px';
		this.slider.forEach(item => {
			item.style.width = this.width + 'px';
		});
		this.rollSlider();
	},
	rollSlider() {
		this.sliderLine.style.transform = 'translate(-' + this.count * this.width + 'px)';
	},
	dotSlider(count) {
		for (let i = 0; i < this.dots.length; i++) {
			this.dots[i].className = this.dots[i].className.replace(" active", "");
			console.log("dot" + i );
		}
		this.dots[count].className += " active";
	},
	sliderNext() {
		this.count++;
		if (this.count >= this.slider.length) {
			this.count = 0;
		}
		this.dotSlider(this.count);
		this.rollSlider();
	},
	sliderPrev() {
		this.count--;
		if (this.count < 0) {
			this.count = this.slider.length - 1;
		}
		this.dotSlider(this.count);
		this.rollSlider();
	},
	showSlides(n) {
		this.count = n;
		this.dotSlider(this.count);
		this.rollSlider();
	}
};

window.addEventListener('resize', () => o2.slider.init());