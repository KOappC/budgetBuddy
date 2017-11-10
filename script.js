$(document).ready(function () {

    var typeInput;
    var nameInput;
    var amountInput;
    var budget;
    var stuff = [];
    var categoryName;
    var entertainmentFilter = [];
    var totalEntertainment = 0;
    var foodFilter = [];
    var totalFood = 0;
    var clothingFilter = [];
    var totalClothing = 0;
    var billsFilter = [];
    var totalBills = 0;
    var otherFilter = [];
    var totalOther = 0;



    // modal functionality
    $("#modalButton").on("click", function(){
        budget = $("#initialBudget").val();
        $(".budgetAmount").text("$" + budget);
        $("#budgetModal").css("display", "none");
    });


    // open form and close form
    $(".select").on("click", function(){
        categoryName = $(this).attr("id");
        $(".popOutForm").css("display","flex");
        $("#typeInput").val(categoryName);
    });

    // exit popOutForm
    $(".closeForm").on("click", function(){
        $(".popOutForm").css("display", "none");
    });
  
    //exit total forms
    $("#closeEntertainmentTotal").on("click", function(){
        $("#entertainmentFilter").css("display", "none");
    });
  
    $("#closeFoodTotal").on("click", function(){
        $("#foodFilter").css("display", "none");
    });
  
    $("#closeClothingTotal").on("click", function(){
        $("#clothingFilter").css("display", "none");
    });
  
    $("#closeBillsTotal").on("click", function(){
        $("#billsFilter").css("display", "none");
    });
  
    $("#closeOtherTotal").on("click", function(){
        $("#otherFilter").css("display", "none");
    });

    //open total forms
    $("#entertainmentOpen").on("click", function() {
        $("#entertainmentFilter").css("display", "flex");
    });

    $("#foodOpen").on("click", function() {
        $("#foodFilter").css("display", "flex");
    });

    $("#clothesOpen").on("click", function() {
        $("#clothingFilter").css("display", "flex");
    });

    $("#billsOpen").on("click", function() {
        $("#billsFilter").css("display", "flex");
    });

    $("#otherOpen").on("click", function() {
        $("#otherFilter").css("display", "flex");
    });

    // submit budget items button
    $("#submit").on("click", function(){
       typeInput = $("#typeInput");
       nameInput = $("#nameInput");
       amountInput = $("#amountInput");

       // displaying text into div
       $("#listText").append("<p><em><strong>" + typeInput.val() + "</strong></em> " + nameInput.val() + " $" + amountInput.val() +"</p>");
       $(".popOutForm").css("display", "none");
       budget -= amountInput.val();

       // pushing form object into stuff array
       stuff.push({
           name: nameInput.val(),
           amount: amountInput.val(),
           type: typeInput.val()
       });

       // entertainment filter
       if(typeInput.val() === "entertainment") {
           entertainmentFilter.push( {
               name: nameInput.val(),
               amount: amountInput.val(),
               type: typeInput.val()
           });
           $("#entertainmentFilter").append("<li>" + nameInput.val() + " " + amountInput.val() + "</li>");
           totalEntertainment += Number(amountInput.val());
           $("#totalEntertainment").text("$" + totalEntertainment);
       }

       // food filter
        if(typeInput.val() === "food") {
           foodFilter.push( {
               name: nameInput.val(),
               amount: amountInput.val(),
               type: typeInput.val()
           });
           $("#foodFilter").append("<li>" + nameInput.val() + " " + amountInput.val() + "</li>");
           totalFood += Number(amountInput.val());
           $("#totalFood").text("$" + totalFood);
        }

       // clothing filter
       if(typeInput.val() === "clothing") {
           clothingFilter.push( {
               name: nameInput.val(),
               amount: amountInput.val(),
               type: typeInput.val()
           });
           $("#clothingFilter").append("<li>" + nameInput.val() + amountInput.val() + "</li>");
           totalClothing += Number(amountInput.val());
           $("#totalClothing").text("$" + totalClothing);
       }

       // bills filter
        if(typeInput.val() === "bills") {
            billsFilter.push( {
                name: nameInput.val(),
                amount: amountInput.val(),
                type: typeInput.val()
            });
            $("#billsFilter").append("<li>" + nameInput.val() + " " + amountInput.val() + "</li>");
            totalBills += Number(amountInput.val());
            $("#totalBills").text("$" + totalBills);
        }

        // other filter
        if(typeInput.val() === "other") {
            otherFilter.push( {
                name: nameInput.val(),
                amount: amountInput.val(),
                type: typeInput.val()
            });
            $("#otherFilter").append("<li>" + nameInput.val() + " " + amountInput.val() + "</li>");
            totalOther += Number(amountInput.val());
            $("#totalOther").text("$" + totalOther);
        }



       $(".budgetAmount").text(budget);


       if (budget < 0) {
           $(".budgetAmount").css("color", "red");
       }

        typeInput.val("");
        nameInput.val("");
        amountInput.val("");

        if (budget < 0) {
            $(".budgetBreakdown").css("display", "none");
        }

    });






}); // Closing of document

/*

    Create an application that allows users to enter their weekly budget and track how much is left based on their purchases throughout the week.  At a minimum, this should include:

    1. Displaying the user's weekly budget which will be updated every time a new item is added to the list of purchased items.
    2. Allow the user to choose between four categories for each purchase.
        * Entertainment
        * Food
        * Clothing
        * Bills
    3. Must clearly indicate to the user how much money has been spent, which requires an easy-to-understand layout.
    4. The user should be able to see how much money is being spent on each of the four categories.
    5. If their budget is consumed within the week, they must be notified that they cannot purchase any more.

 */