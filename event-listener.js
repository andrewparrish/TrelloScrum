chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ?
								"from a content script:" + sender.tab.url :
								"from the extension");
		if (request.options) {
			var options = {};
			for (var i = 0; i < request.options.length; i++) {
				options[request.options[i]] = localStorage[request.options[i]];
			}
			sendResponse({options: options});
		}
	});