// Validate input, when invalid or empty input is given, alert user to enter valid input 
export function validateTextInput(input) {
    if (!input) {
        return 'Please enter a quote.'
    } else if (typeof input !== 'string') {
        return 'Invlid quote. A quote consists of words and punctuations.'
    }
    return true;
};

// Print data in the map
export function printQuotes(quoteMap) {
    quoteMap.forEach((value, key) => {
        console.info(`${key} says, "${value}"`);
    });
};