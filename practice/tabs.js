const openTab = document.querySelectorAll('.button');
const tabs = document.querySelectorAll('[data-tab-content]');

openTab.forEach(clickedButton => {
	clickedButton.addEventListener('click',function(){

		// finding tab using querySelector #data-tab="tab-$"
		// clickedButton.dataset.tab = tab-$ so I find tab which have #tab-$
		const tab = document.querySelector('#' + clickedButton.dataset.tab);

		//finding all contentboxes and hiding it
		//tabs (arr with tabs) for each item [0,1 etc] we run function(item)
		//item [0,1 etc] remove visible - function([0]) remove visible etc
		tabs.forEach(function(item) {
			item.classList.remove('visible');
		})
		//showing clicked tab
		tab.classList.add('visible');
	})
})