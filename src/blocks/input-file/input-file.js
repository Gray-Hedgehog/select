o2.inputFile = {
	onChoose(event){
		const fileInput = document.querySelector('._file-input');
		const fileName = document.querySelector('._file-name');
		const uploadedFileName = event.target.files[0].name;
		fileName.textContent = uploadedFileName;
	}
}