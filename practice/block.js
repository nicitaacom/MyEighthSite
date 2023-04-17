const openBlock = document.querySelector("#button");
const block = document.querySelector(".block");

button.addEventListener('click',function(){
	if (block.classList.toggle('visible')){
		button.textContent = "Close block";
	}
	else {
		button.textContent = "Open block";
	}
})