var wrapper = document.getElementById("content-wrapper");
wrapper.className = "col-md-12";
wrapper.firstElementChild.firstElementChild.className = "col-md-12";

function resize() {
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var e = document.getElementsByClassName("fc-scroller")[0];
	if(e)
		document.getElementsByClassName("fc-scroller")[0].style.height = (h - 300) + "px";
	setTimeout(resize, 100);
}

setTimeout(resize, 100);
