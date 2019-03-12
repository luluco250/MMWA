(function() {
	const canvas = document.getElementById("app-canvas");
	const ctx = canvas.getContext("2d");

	function draw_canvas() {
		//ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function main_loop() {
		draw_canvas();
		window.requestAnimationFrame(main_loop);
	}

	window.onload = function() {
		main_loop();
	};
})();