function doMagic() {
	/*
		OUTSIDE BODY

		remove script, style, iframe,
		button, form, input
	*/

	/* 
		INSIDE BODY

		tag should have <p>
		with at least 560 words
		else remove tag
	*/
	alert('hello extensions');
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "toggle_button_clicked") {
			doMagic();
		}
});