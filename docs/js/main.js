/********************
	choseConsol.js
********************/
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKlxuXHRjaG9zZUNvbnNvbC5qc1xuKioqKioqKioqKioqKioqKioqKiovXG5cInVzZSBzdHJpY3RcIjtcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc2VudEJsb2NrJyk7XG5sZXQgYmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2VuZXJhdGlvblwiKTtcbmZvcihsZXQgZWwgb2YgYmxvY2spIHtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdGxldCBjbGFhcyA9IGVsLmNsYXNzTGlzdFsxXTtcblx0XHRjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsYCR7Y29udGFpbmVyLmNsYXNzTGlzdFswXX0gJHtjbGFhc31gKTtcblx0XHRsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5lcmF0aW9uXCIpO1xuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoeCwgZnVuY3Rpb24oZWwpIHtcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHR9KTtcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
