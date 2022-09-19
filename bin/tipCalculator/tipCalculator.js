#!/usr/bin/env node
import Inquirer from 'inquirer';

function validateBillAmount(answer) {
    // Check if user enters valid input for bill amount,
    // if invalid, return an error message and ask the same question again,
    // bill amount must be given, can be converted to a number, non-negative value   
    if (!answer) {
        return 'Please enter a bill amount!'
    } else if (isNaN(parseFloat(answer)) || isNaN(Number(answer)) || Number(answer) <= 0) {
        return 'Bill amount must be a number!'
    }
    return true // Return true to display the next question
};

function validateTipPercentage(answer) {
    // Check if user enters valid input for tip percentage,
    // if invalid, return an error message and ask the same question again,
    // tip % must be given, can be converted to a float, value within 0 - 100 range   
    if (!answer) {
        return 'Please enter a tip percentage!'
    } else if (isNaN(parseFloat(answer)) || parseFloat(answer) <= 0 || parseFloat(answer) >= 100) {
        return 'Tip percentage must be in the range of 0 - 100'
    }
    return true
}

// Calculate the amount of tip 
function calculateTip(billAmount, tipPercentage) {
    let tip = 0;
    tip = billAmount * (tipPercentage / 100);
    return tip;
}

// Calculate the total amount of the bill
function calculateTotal(billAmount, tipAmount) {
    const total = billAmount + tipAmount;
    return total;
};

function displayResults(answers) {
    // Display results i.e. bill amount, tip %, tip amount, total bill amount
    const billAmount = parseFloat(answers.billAmount);
    const tipPercentage = parseFloat(answers.tipPercentage);
    const tipAmount = Number(calculateTip(billAmount, tipPercentage).toFixed(1));
    console.info('Bill amount is: $', billAmount);
    console.info('Tip percentage is: ', tipPercentage, '%');
    console.info('-----------------------------------------');
    console.info('Tip amount is: $', tipAmount);
    console.info('Total bill amount is: $', calculateTotal(billAmount, tipAmount));
}

// A module to ask user for bill and tip info,
// do calculation and display results 
const TipCalculator = () => {
    // local variable to save the status of the usage of the tip calculator
    let status = 'started';

    Inquirer
        // Takes an array of questions
        .prompt([
            {
                type: 'input',
                name: 'billAmount',
                message: 'Bill amount? $',
                validate: (answer) => validateBillAmount(answer),
            },
            {
                type: 'input',
                name: 'tipPercentage',
                message: 'Tip %?',
                validate: (answer) => validateTipPercentage(answer),
            }
        ])
        .then(answers => {
            displayResults(answers);
            status = 'ended' // Indicate this usage of the tip calculator has finished
            console.info('========================================');
            // Call the tip calculator recursively once an usage has finished
            if (status === 'ended') {
                TipCalculator();
            }
        });
};

export default TipCalculator;