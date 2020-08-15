$(function() {

	let purchases = [];
	let categories = [];
	let budget = {
		total: 0,
		remaining: 0
	};

	const initializeCategories = function() {
		categories.push(
			{id: 1, name: "entertainment", spendAmount: 0},
			{id: 2, name: "food", spendAmount: 0},
			{id: 3, name: "clothing", spendAmount: 0},
			{id: 4, name: "bills", spendAmount: 0}
		);
	};
	initializeCategories();

	const initialPrompt = function() {
		let budgetPrompt = prompt("Please enter your weekly budget amount.");
		let budgetAmount = parseInt(budgetPrompt);
		if (isNaN(budgetAmount)) {
			alert("You must enter a number.");
			initialPrompt();
		}
		initializeBudget(budgetAmount);
	};

	const initializeBudget = function(budgetAmount) {
		budget.total = budgetAmount;
		budget.remaining = budgetAmount;
		$("#total").text(budgetAmount);
		$("#remaining").text(budgetAmount);
		$("#budget")
			.val(budgetAmount)
			.attr("max", budgetAmount)
			.attr("low", (budgetAmount / 5)
		);
	};

	$("button#purchase-form-trigger").on("click", function(e){
		$(".new-purchase").fadeIn(500);
	});

	$('#purchase-save').on("click", function(){
		if($('#purchase-name').val() === '' || $('#purchase-date').val() === '' || $('#purchase-amount').val() === '' || $('#purchase-category').val() === ''){
			alert('Input can not be left blank.');
			return;
		}
			createNewPurchase();
			$(".new-purchase").fadeOut(500);
			resetForm();
	});

	$("#purchase-cancel").on("click", function(){
		$(".new-purchase").fadeOut(500);
		resetForm();
	});

	const resetForm = function resetForm (){
		$("#purchase-name").val("");
		$("#purchase-date").val("");
		$("#purchase-amount").val("");
		$("#purchase-category").val("");
	};

	const createNewPurchase = function() {
		let purchaseName = $("#purchase-name").val();
		let purchaseDate = $("#purchase-date").val();
		let getPurchaseAmount = $("#purchase-amount").val();
		let purchaseAmount = parseInt(getPurchaseAmount);
		let getPurchaseCategory = $("#purchase-category").val();
		let purchaseCategory = parseInt(getPurchaseCategory);
		let newPurchase = {
	 		item: purchaseName,
	 		date: purchaseDate,
	 		amount: purchaseAmount,
	 		category: purchaseCategory
		};
		findUpdateCategory(newPurchase);
	};	

	const findUpdateCategory = function(newPurchase) {
		let category = categories.find(function(category) {
			return category.id === newPurchase.category;
		});
		category.spendAmount += newPurchase.amount;
		updateBudget(newPurchase);
	};

	const updateBudget = function(newPurchase) {
		budget.remaining -= newPurchase.amount;
		if (budget.remaining <= 0) {
			alert("You've spent your budget, no more buying!!");
		}
		addPurchaseToArray(newPurchase);
	};

	const addPurchaseToArray = function(newPurchase) {
		purchases.push(newPurchase);
		updatePurchases(newPurchase);
	};

	const updatePurchases = function(newPurchase) {
		$(".purchases").append(
			"<div class=\"purchase-detail category" + newPurchase.category + "\">"
			+"<p class=\"purchase-name\">" + newPurchase.item + "</p>"
			+"<p class=\"purchase-date\">" + newPurchase.date + "</p>"
			+"<p class=\"purchase-amount\">$" + newPurchase.amount + "</p>"
			+ "</div>"
		);
		updateScreen();
	};

	const updateScreen = function() {
		$("#remaining").text(budget.remaining);
		$("#budget").val(budget.remaining);
		$("#entertainment-spend").text(categories[0].spendAmount);
		$("#food-spend").text(categories[1].spendAmount);
		$("#clothing-spend").text(categories[2].spendAmount);
		$("#bills-spend").text(categories[3].spendAmount);
	};

	window.setTimeout(initialPrompt, 500);
}); // wrapper
