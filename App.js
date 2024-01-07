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
};

// Defining a function to obtain the number of lines to bet on
const getNumberOfLines = () => {
    // Using an infinite loop until a valid number of lines is entered
    while (true) {
        // Prompting the user to enter the number of lines to bet on
        const lines = prompt("Enter the number of lines to bet on (1-3): ");

        // Converting the entered number of lines to a floating-point number
        const numberOfLines = parseFloat(lines);

        // Checking if the entered value is not a valid number or falls outside the allowed range
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            // Displaying an error message and prompting the user to try again
            console.log("Invalid number of lines, please try again");
        } else {
            // Returning the valid number of lines if conditions are met
            return numberOfLines;
        }
    }
};

// Defining a function to obtain the user's bet amount, considering the available balance
const getBet = (balance) => {
    // Using an infinite loop until a valid bet amount is entered
    while (true) {
        // Prompting the user to enter the total bet amount
        const bet = prompt("Enter the total bet: ");

        // Converting the entered bet amount to a floating-point number
        const numberBet = parseFloat(bet);

        // Checking if the entered value is not a valid number or falls outside the allowed range
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
            // Displaying an error message and prompting the user to try again
            console.log("Invalid bet, please try again");
        } else {
            // Returning the valid bet amount if conditions are met
            return numberBet;
        }
    }
};

// Calling the functions and storing the results in variables
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
