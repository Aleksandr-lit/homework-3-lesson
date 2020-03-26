var counter = 30;
var startStop;

function start() {
	var second = document.querySelector("#sec");
	startStop = setInterval(function(){
		second.innerHTML = counter-- + " second";
		if (counter <= 0) {
			clearInterval(startStop);
		}
	}, 1000);
}

function stop() {
	clearInterval(startStop);
}

function reset() {
	var second = document.querySelector("#sec");
	counter = 30;
	second.innerHTML = counter + " second";
}