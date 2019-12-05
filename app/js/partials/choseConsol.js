"use strict";
let container = document.querySelector('.presentBlock');
let block = document.getElementsByClassName("generation");
for(let el of block) {
	el.addEventListener("click", function() {
		let claas = el.classList[1];
		container.setAttribute('class',`${container.classList[0]} ${claas}`);
		let x = document.getElementsByClassName("generation");
		Array.prototype.forEach.call(x, function(el) {
			el.classList.remove("active");
		});

		this.classList.add('active');
	});
}