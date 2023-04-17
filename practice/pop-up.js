const openPopUp = document.querySelectorAll('[data-open-pop-up]');
const popUps = document.querySelectorAll('.pop-up');
const closePopUp = document.querySelectorAll('#closePopUp')

openPopUp.forEach(clickedButton => {
	clickedButton.addEventListener('click',function(){
		
		//getting number of pop-up
		console.log("pop-up number:" + clickedButton.dataset.openPopUp);
		const popUpNubmer = clickedButton.dataset.openPopUp;

		//getting pop-up class by pop-up number and making it visible
		console.log("pop-up class:\n", document.querySelector('#pop-up' + popUpNubmer));
		const popUp = document.querySelector('#pop-up' + popUpNubmer);
		popUp.classList.add('visible');

		//prevent closing pop-up by clicking on pop-up content
		popUp.querySelector('.pop-up_content').addEventListener('click',function(event){
			event.stopPropagation();
		})

		//close pop-up by clicking x
		closePopUp.forEach(clickedClose => {
			clickedClose.addEventListener('click', function(){
				popUp.classList.remove('visible');
			})
		})

		//close pop-up by clicking outside
		popUp.addEventListener('click', function(){
			popUp.classList.remove('visible');
		})
	})
})