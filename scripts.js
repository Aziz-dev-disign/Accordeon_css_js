var act = document.getElementsByClassName("accordion");

var i;

for (i = 0;i < act. length; i++ ) {
	act[i].onclick = function () {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
		else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}
}