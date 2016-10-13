function doMagic() {
	/*
		OUTSIDE BODY

		remove script, style, iframe,
		button, form, input, video
	*/
	var elementList = [
		"script",
		"noscript",
		"style",
		"link",
		"iframe",
		"button",
		"form",
		"input",
		"video"
	];

	elementList.forEach(function(element) {
		$(element).remove();
	});
	/* 
		INSIDE BODY

		tag should have <p>
		with at least 560 words
		else remove tag
	*/
	
	var contentList = [
		"p"	// Potential for the list to increase
	];

	contentList.forEach(function(element) {
		if($(element).val().replace(/ /g, '').length <= 200) {
			$(element).remove();
			$(element).parent().remove();
		}
	});

}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "toggle_button_clicked") {
			doMagic();
		}
	}
);