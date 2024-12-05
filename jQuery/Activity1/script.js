$(() => {
	console.log("funsifiona");

	$("#input1").on("change", () => {
		const value = $("#input1").val();
		if (!isNumeric(value)) {
			$("#error").text("Enter a valid number in the first input");
		} else {
			$("#error").text("");
		}
	});

	$("#input2").on("change", () => {
		const value = $("#input2").val();
		if (!isNumeric(value)) {
			$("#error").text("Enter a valid number in the second input");
		} else {
			$("#error").text("");
		}
	});

	$("button").on("click", () => {
		const value1 = $("#input1").val();
		const value2 = $("#input2").val();
		if (isNumeric(value1) && isNumeric(value2)) {
			$("#result").text(parseFloat(value1) + parseFloat(value2));
			$("#error").text("");
		} else {
			$("#error").text("Enter a valid number in both inputs");
		}
	});
});

function isNumeric(value) {
	return !isNaN(parseFloat(value));
}
