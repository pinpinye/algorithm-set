

function throttle(fn, delay) {
	let lastTime = 0;
	return function(...args) {
		let currentTime = new Date();
		if(currentTime - lastTime >= delay) {
			fn.apply(this,...args);
			lastTime = currentTime;
		}
	}
}
