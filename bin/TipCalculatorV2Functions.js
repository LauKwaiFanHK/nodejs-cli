export function validateBillAmount(answer) {
    // Check if user enters valid input for bill amount,
    // if invalid, return an error message and ask the same question again,
    // bill amount must be given, can be converted to a number, non-negative value   
    if (!answer) {
        return 'Please enter a bill amount!'
    } else if (!checkBillAmountFormat(answer)) {
        return 'Bill amount must be a number! Example: 124,62'
    }
    return true // Return true to display the next question
};

// Check if a bill amount has a euro unit and a 2 decimal point cent unit
// e.g. 1244,53
export function checkBillAmountFormat(input) {
    const regex_euro = new RegExp(/^\d*\,\d{2}$/);
    return regex_euro.test(input);
};

export function validateTipPercentage(input) {
    // Check if user enters valid input for tip percentage,
    // if invalid, return an error message and ask the same question again,
    // tip % must be given, can be converted to a float, value within 0 - 100 range   
    if (!input) {
        return 'Please enter a tip percentage!'
    } else if (!checkPercentFormat(input)) {
        return 'Tip percentage must be an integer between 0 - 100'
    }
    return true
};

// Check if a tip percentage is an integer, bigger or equal to 0 and less or equal than 100
export function checkPercentFormat(input) {
    const num = Number(input);
    return (num >= 0 && num <= 100)
};

// Take a tip percentage string input, calculate a tip amount in number type in cent,
// round up to nearest integer when tip is a decimal number,
// since a cent in euro currency does not have a deciaml point
export function calculateTipInCent(billAmount, tipPercentage) {
    let tipInCent = 0;
    tipInCent = billAmount * (Number(tipPercentage) / 100);
    return Math.ceil(tipInCent);
}

// Convert a bill amount string input into a number in cent
export function calculateBillAmountInCent(billAmount) {
    const arr = billAmount.toString().split(',');
    const billAmountInCent = Number(arr[0]) * 100 + Number(arr[1]);
    return billAmountInCent;
}

// Calculate the total bill amount in cent
export function calculateTotal(billAmountInCent, tipAmountInCent) {
    const totalAmountInCent = billAmountInCent + tipAmountInCent;
    return totalAmountInCent;
};

// Convert an amount in cent back euro with the format [euro,cent]
export function convertAmountInCentToEuro(amountInCent) {
    const amount = amountInCent / 100;
    const arr = amount.toString().split('.');
    const euroInText = arr[0] + ',' + arr[1];
    return euroInText;
};

// Function to display results i.e. bill amount, tip %, tip amount, total bill amount
export function displayResults(answers) {
    const billAmount = calculateBillAmountInCent(answers.billAmount);
    const tipAmount = calculateTipInCent(billAmount, answers.tipPercentage);
    console.info('Bill amount is: ', answers.billAmount, 'EUR');
    console.info('Tip percentage is: ', answers.tipPercentage, '%');
    console.info('-----------------------------------------');
    console.info('Tip amount is: ', convertAmountInCentToEuro(tipAmount), 'EUR');
    console.info('Total bill amount is: ', convertAmountInCentToEuro(calculateTotal(billAmount, tipAmount)), 'EUR');
};