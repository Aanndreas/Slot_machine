//PSEUDO CODE BELOW:
// 1. Users shall be able to deposit money
// 2. Users shall be able to determine the number of lines to bet on
// 3. The program shall be able to collect a bet amount
// 4. The program shall be able to spin slot machine
// 5. The program shall be able to check if the user won
// 6. The program shall be able to give the user the winnings or take their bet 
// 7. The program shall be able to play again

// Importing the 'prompt-sync' library for synchronous user input in Node.js
const prompt = require("prompt-sync")();

// Defining a function to handle user deposits
const deposit = () => {
    // Using an infinite loop until a valid deposit amount is entered
    while (true) {
        // Prompting the user to enter a deposit amount
        const depositAmount = prompt("Enter an amount to deposit: ");

        // Converting the entered amount to a floating-point number
        const numberDepositAmount = parseFloat(depositAmount);

        // Checking if the entered amount is not a valid number or less than or equal to zero
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            // Displaying an error message and prompting the user to try again
            console.log("Invalid deposit amount, please try again");
        } else {
            // Returning the valid deposit amount if conditions are met
            return numberDepositAmount;
        }
    }
}

// Calling the deposit function and storing the result in the 'depositAmount' variable
const depositAmount = deposit();

