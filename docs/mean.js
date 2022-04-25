window.onclick = function() {
	var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
	var audio = document.getElementById("audio");
	if (isChrome) {
		audio.play();
		console.log("播放")
	}
}
