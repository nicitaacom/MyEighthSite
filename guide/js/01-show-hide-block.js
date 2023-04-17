/* finding smth by id */
const button = document.querySelector('#button');
const content = document.querySelector('#content');


button.addEventListener("click",function(){

	//we add/remove class content-hidden using toggle
	if (content.classList.toggle('content-hidden')) {
		button.textContent = "Открыть блок";
	}
	else {
		button.textContent = "Закрыть блок";
	}
})