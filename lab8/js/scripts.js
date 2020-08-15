$(function() {

	$(".table.available").on("click", function() {
		if ($(this).attr("class") === "table reserved") {
			return false;
		}
		let targetTable = $(this).find(".table-number").text();
		$(this).addClass("selected");
		$(".reservation").fadeIn(200).css("display", "block");
		$("#table-number").text(targetTable);
	});

	$(".cancel").on("click", function() {
		$(".reservation").fadeOut(400, function() {
			$(".reservation").css("display", "none");
		});
		$(".selected").removeClass("selected");
	});

	$(".form-btn").on("click", function() {
		let targetTable = $("#table-number").text()
		let targetTableNumber = parseInt(targetTable);
		setDetails(targetTableNumber);
		$(".reservation").fadeOut(400, function() {
			$(".reservation").css("display", "none");
		});
		$(".selected").addClass("reserved");
		$(".selected").removeClass("available");
		$(".selected").removeClass("selected");
		resetReservationForm();
		assignReservedEvent();
	});
	
	const setDetails = function(targetTableNumber) {
		let reservationName = $("#name").val();
		let reservationPhone = $("#phone").val();
		let reservationGuest = $("#guests").val();
		$("[data=" + targetTableNumber + "]").find(".details-name").text(reservationName);
		$("[data=" + targetTableNumber + "]").find(".details-party").text(reservationGuest);
	}

	const resetReservationForm = function() {
		$("#name").val("");
		$("#phone").val("");
		$("#guests").val("");
	}

	const assignReservedEvent = function() {
		$(".table.reserved").on("mouseenter", function() {
			$(this).find(".details").css("display", "block");
		});
		$(".table.reserved").on("mouseleave", function() {
			$(this).find(".details").css("display", "none");
		});
	};

}); // wrapper




