$(document).ready(function () {

    var typeInput;
    var nameInput;
    var amountInput;
    var budget = 800;

// open form and close form

    $(".select").on("click", function(event){
        $(".popOutForm").css("display","flex");
    });

    $(".closeForm").on("click", function(event){
        $(".popOutForm").css("display", "none");
    });

    $("button").on("click", function(event){
        
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