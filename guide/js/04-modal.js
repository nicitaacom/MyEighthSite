const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]')


//buttons for open modal
modalButtons.forEach(function (item) {
	item.addEventListener('click',function() {
		const modalId = this.dataset.modalButton;
		const modal = document.querySelector('#' + modalId);
		modal.classList.remove('hidden');

		//finding inside this modal modal and block clicks on modal
		modal.querySelector('.modal-window').addEventListener('click',function(event){
			event.stopPropagation()
		})

	})
})
//buttons for close modal
modalCloseButtons.forEach(clicked => {
	clicked.addEventListener('click',function() {
		//searching parent with data-atribute data-modal
		const modal = clicked.closest('[data-modal]');
		modal.classList.add('hidden');
	})
})
//close modal by clicking outside
allModals.forEach(function (item) {
	item.addEventListener('click',function() {
		this.classList.add('hidden');
	})
})






















/*const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const closePopUpButton = document.querySelector('[data-modal-close]');



button.addEventListener('click',function() {
	modal.classList.remove('hidden');
})

closePopUpButton.addEventListener('click',function () {
	modal.classList.add('hidden');
});

modal.addEventListener('click',function() {
	modal.classList.add('hiidden');
})

modal.querySelector(".modal-window").addEventListener('click',function (event) {
event.stopPropagation();
})*/