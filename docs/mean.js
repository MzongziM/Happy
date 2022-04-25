window.onclick = function() {
	var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
	var audio = document.getElementById("audio");
	if (isChrome) {
		if (audio.paused) {
			audio.play();
			console.log("播放")
		} else if (audio.played) {
			audio.pause();
			console.log("暂停");
		}
	}
}
