$(function() {

	$(".inner-container div").on("click", function() {
		let targetDivTable = $(this).text();
		// targetDivTableNumber = parseInt(targetDivTable);
		$(this).addClass("selected");
		$(".reservation").fadeIn(200).css("display", "block");
		$("#table-number").text(targetDivTable);
		// return targetDivTableNumber;
	});

	$(".cancel").on("click", function() {
		$(".reservation").fadeOut(200, function() {
			$(".reservation").css("display", "none");
		});
		$(".selected").removeClass("selected");
	});

	$(".form-btn").on("click", function() {
		$(".reservation").fadeOut(200, function() {
			$(".reservation").css("display", "none");
		});
		$(".selected").addClass("reserved");
		$(".selected").removeClass("available");
		$(".selected").removeClass("selected");
		$(".reserved").off();
	});
	
	// let targetDivTableNumber;
	// $(".inner-container div:nth-child(" + targetDivTableNumber + ")").addClass("reserved");
	// $(".inner-container div:nth-child(" + targetDivTableNumber + ")").removeClass("available");

}); // wrapper
