#!/usr/bin/env node
import Inquirer from 'inquirer';
import {
    validateBillAmount,
    validateTipPercentage,
    displayResults
} from './TipCalculatorV2Functions.js';


// Tip calculator that handle money in a right way
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