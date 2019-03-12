(function() {
	const monitor_list = document.getElementById("monitor-list");

	document.getElementById("add-monitor-button").onclick = function() {
		const entry = document.createElement("li");
		entry.className = "monitor-entry";

		function input_validator(e) {
			const KEYS = {
				"0": 1, "1": 1, "2": 1, "3": 1, "4": 1,
				"5": 1, "6": 1, "7": 1, "8": 1, "9": 1,
				"Backspace": 1, "Tab": 1,
				"ArrowUp": 1, "ArrowDown": 1,
				"ArrowLeft": 1, "ArrowRight": 1,
				"Control": 1, "Shift": 1, "Alt": 1,
				"Home": 1, "End": 1, "Delete": 1
			};

			return KEYS[e.key] === 1;
		}

		const width = document.createElement("input");
		width.type = "text";
		width.placeholder = "width";
		width.onkeydown = input_validator;
		entry.appendChild(width);

		entry.appendChild(document.createTextNode(" x "));
		
		const height = document.createElement("input");
		height.type = "text";
		height.placeholder = "height";
		height.onkeydown = input_validator;
		entry.appendChild(height);

		const button = document.createElement("input");
		button.className = "simple-button";
		button.type = "button";
		button.value = "X";
		button.onclick = function() {
			entry.remove();
		};
		entry.appendChild(button);

		monitor_list.appendChild(entry);
	};
})();