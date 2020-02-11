function StopWatch(elem) {
	let time = 0;
	let interval;
	let offset;

	function update() {
		if (this.isOn) {
			time += delta();
		}
		elem.textContent = timeFormatter(time);

	}


	const delta = () => {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	};
	
	const timeFormatter = time => {
		time = new Date(time);
		let hours = time.getHours().toString();
		let minutes = time.getMinutes().toString();
		let seconds = time.getSeconds().toString();
		let milliSeconds = time.getMilliseconds().toString();

		if (minutes.length < 2) {
			minutes = '0' + minutes;
		}
		if (seconds.length < 2) {
			seconds = '0' + seconds;
		}
		while (milliSeconds.length < 3) {
			milliSeconds = '0' + milliSeconds;
		}

		return minutes + ':' + seconds + '.' + milliSeconds;
	};

	this.isOn = false;

	this.start = () => {
		if (!this.isOn) {
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.isOn = true;
		}
	};

	this.stop = () => {
		if (this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};

	this.reset = () => {
		time = 0;
		update();
	};
}

const clock = new StopWatch();
