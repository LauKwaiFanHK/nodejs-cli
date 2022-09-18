import Inquirer from 'inquirer';
import {
    validateTextInput,
    printQuotes
} from './QuoteEnquiryFunctions.js';

// Prompt for user's quote and the quote's author
const questions = [
    {
        type: 'input',
        name: 'quote',
        message: 'Your favourite quote?',
        validate: (answer) => validateTextInput(answer),
    },
    {
        type: 'input',
        name: 'author',
        message: 'Who says it?',
        validate: (answer) => validateTextInput(answer),
    }
];

// Create a command line utility using the inquirer package,
// that takes a map as an argument so that new quote and author can be added to 
// the existing map
const QuoteEnquiry = (quoteMap) => {
    Inquirer
        .prompt(questions)
        .then(answers => {
            quoteMap.set(answers.author, answers.quote); // add new data to map; author as key, quote as value
            printQuotes(quoteMap);
            QuoteEnquiry(quoteMap);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Your console environment is not supported!")
            } else {
                console.log(error)
            }
        })
};

export default QuoteEnquiry;