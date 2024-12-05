$(() => {
	console.log("Document is ready");

	$("button").on({
		click: () => {
			$("button").text("Clicked");
			console.log($("#name").val());
			$("input").val("Clicked");
		},
		mouseenter: () => {
			$("button").text("Mouse Enter");
		},
	});
});
