#!/usr/bin/env node
import Inquirer from 'inquirer';

function calculateTip(billAmount, tipPercentage) {
    let tip = 0;
    tip = billAmount * (tipPercentage / 100);
    return tip;
}

function calculateTotal(billAmount, tipAmount) {
    const total = billAmount + tipAmount;
    return total;
}

const TipCalculator = () => {
    let status = 'started';

    Inquirer
        .prompt([
            {
                type: 'input',
                name: 'billAmount',
                message: 'Bill amount? $',
                validate(answer) {
                    if (!answer) {
                        return 'Please enter a bill amount!'
                    } else if (isNaN(parseFloat(answer)) || isNaN(Number(answer)) || Number(answer) <= 0) {
                        return 'Bill amount must be a number!'
                    }
                    return true
                }
            },
            {
                type: 'input',
                name: 'tipPercentage',
                message: 'Tip %?',
                validate(answer) {
                    if (!answer) {
                        return 'Please enter a tip percentage!'
                    } else if (isNaN(parseFloat(answer)) || parseFloat(answer) <= 0 || parseFloat(answer) >= 100) {
                        return 'Tip percentage must be in the range of 0 - 100'
                    }
                    return true
                }
            }
        ])
        .then(answers => {
            const billAmount = parseFloat(answers.billAmount);
            const tipPercentage = parseFloat(answers.tipPercentage);
            const tipAmount = Number(calculateTip(billAmount, tipPercentage).toFixed(1));
            console.info('Bill amount is: $', billAmount);
            console.info('Tip percentage is: ', tipPercentage, '%');
            console.info('-----------------------------------------');
            console.info('Tip amount is: $', tipAmount);
            console.info('Total bill amount is: $', calculateTotal(billAmount, tipAmount));
            status = 'ended'
            console.info('========================================');
            if (status === 'ended') {
                TipCalculator();
            }
        });
};

export default TipCalculator;