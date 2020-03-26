var counter = 0;
var startStop;

function start() {
	var second = document.querySelector("#sec");
	startStop = setInterval(function(){
		second.innerHTML = ++counter + " second";
		if (counter >= 30) {
			clearInterval(startStop);
		}
	}, 1000);
}

function stop() {
	clearInterval(startStop);
}

function reset() {
	var second = document.querySelector("#sec");
	counter = 0;
	second.innerHTML = counter + " second";
}