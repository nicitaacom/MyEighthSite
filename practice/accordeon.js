const openAccordeon = document.querySelectorAll("[data-name='accordeon-title']");



openAccordeon.forEach(clicked => {
	clicked.addEventListener('click', e => {


        //setting parent=parent of clicked button
        const parent = clicked.closest(".accordeon");
      
        //setting class "visible" to the parent of clicked button and closing previous opened accordeon if previous
        //opened accordion != clicked accourdeon
         parent.classList.toggle("visible");


 })
})