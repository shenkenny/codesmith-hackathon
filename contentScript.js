
chrome.runtime.onMessage.addListener(

	function (message, sender, sendresponse) {
		console.log(message);
		let found;
		let text = document.getElementsByTagName("*");
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(message, "g"), '<mark>'+message+'</mark>');

			}

);
