import {jest} from '@jest/globals';
import {
    validateBillAmount,
    checkBillAmountFormat,
    validateTipPercentage,
    checkPercentFormat,
    calculateTipInCent,
    calculateBillAmountInCent,
    calculateTotal,
    convertAmountInCentToEuro,
    displayResults
} from './tipCalculatorV2Functions.js';

const billAmountInput = [
    '1234.9',
    '1234.93',
    '1234.934',
    '1234.',
    '1234.ab',
    'abc',
    'abc.de',
    'abc,de',
    '1234,1',
    '1234,123',
    ',1',
    ',123'
];

const billAmountInput_2 = [
    ',12',
    '1,12',
    '12,43',
    '435,54',
    '06,99'
];

const percentInput = [
    '54,5',
    'hk',
    'hk,57',
    '0,467',
    '0,46',
    '123',
    '123,5',
    '123,57',
    '123,875'
];

const percentInput_2 = [
    '0',
    '1',
    '23',
    '99'
];

describe('TipCalculatorV2', () => {
    test('Function validateBillAmount - should alert to enter a bill amount', () => {
        expect(validateBillAmount(null)).toBe('Please enter a bill amount!');
    });

    test.each(billAmountInput)
        ('Function validateBillAmount - should alert to enter a valid amount format', (input) => {
            expect(validateBillAmount(input)).toBe('Bill amount must be a number! Example: 124,62');
        });

    test.each(billAmountInput)
        ('Function checkBillAmountFormat - should return true if input match the regex', (input) => {
            expect(checkBillAmountFormat(input)).toBe(false);
        });

    test.each(billAmountInput_2)
        ('Function validateBillAmount - should return true', (input) => {
            expect(validateBillAmount(input)).toBe(true);
        });

    test.each(billAmountInput_2)
        ('Function checkBillAmountFormat - should return true if input match the regex', (input) => {
            expect(checkBillAmountFormat(input)).toBe(true);
        });

    test('Function validateTipPercentage - should alert user to enter a value', () => {
        expect(validateTipPercentage(null)).toBe('Please enter a tip percentage!');
    });

    test.each(percentInput)
        ('Function validateTipPercentage - should alert user to enter a valid percentage', (input) => {
            expect(validateTipPercentage(input)).toBe('Tip percentage must be an integer between 0 - 100');
        });

    test.each(percentInput)
        ('Function checkPercentFormat - should return true', (input) => {
            expect(checkPercentFormat(input)).toBe(false);
        });

    test.each(percentInput_2)
        ('Function validateTipPercentage - should return true', (input) => {
            expect(validateTipPercentage(input)).toBe(true);
        });

    test.each(percentInput_2)
        ('Function checkPercentFormat - should return true', (input) => {
            expect(checkPercentFormat(input)).toBe(true);
        });

    test('Function calculateTipInCent - should calculate tip amount in cent', () => {
        expect(calculateTipInCent(123, '47')).toBe(58);
    });

    test('Function calculateBillAmountInCent - should calculate bill amount in cent', () => {
        expect(calculateBillAmountInCent('123,74')).toBe(12374);
    });

    test('Function calculateTotal - should calculate total bill amount in cent', () => {
        expect(calculateTotal(12374, 35)).toBe(12409);
    });

    test('Function convertAmountInCentToEuro - should calculate total bill amount in cent', () => {
        expect(convertAmountInCentToEuro(12409)).toBe('124,09');
    });

    test('Function displayResults - should show input bill amount, input tip percentage, tip amount and total bill amount', () => {
        console.info = jest.fn();
        const answers = { billAmount: '123,64', tipPercentage: '34' };
        displayResults(answers);
        expect(console.info).toHaveBeenCalledTimes(5);
    });
});