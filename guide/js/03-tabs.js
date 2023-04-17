//searching all elements by data atribute (data-tab)
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(clickedItem => {
	clickedItem.addEventListener('click',function() {

		//hide all contentBox
		contentBoxes.forEach(function (item) {
			item.classList.add('hidden');
		})

		const contentBox = document.querySelector('#' + clickedItem.dataset.tab);
		contentBox.classList.remove('hidden');


	})
})