document.addEventListener('DOMContentLoaded', function() {
	var toggleButton = document.getElementById('toggleButton');

	toggleButton.addEventListener('click', function() {
		
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.sendMessage(tab.id, {
				"message": "toggle_button_clicked"
			})
		});
	}, false);
}, false);