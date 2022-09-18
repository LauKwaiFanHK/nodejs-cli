import { jest } from '@jest/globals';
import {
    validateTextInput,
    printQuotes
} from './QuoteEnquiryFunctions.js';

describe('QuoteEnquiryFunctions', () => {
    test('Function validateTextInput - should return true for valid input', () => {
        expect(validateTextInput('abc')).toBe(true);
    });

    test.each([
        null,
        undefined,
        false,
        ''
    ])
        ('Function validateTextInput - should return a text for empty input', (input) => {
            expect(validateTextInput(input)).toBe('Please enter a quote.');
        });

    test.each([
        123,
        {},
        [],
        BigInt(Number.MAX_SAFE_INTEGER),
        Symbol(),
        Symbol('foo'),
    ])
        ('Function validateTextInput - should return a text for input data type which is not string', (input) => {
            expect(validateTextInput(input)).toBe('Invlid quote. A quote consists of words and punctuations.');
        });

    test('Function printQuotes - should call console.info to print a text', () => {
        console.info = jest.fn().mockReturnValue('This is a returned value');
        const map = new Map;
        map.set('Willy', 'It is a beautiful world.');
        printQuotes(map);
        expect(console.info).toHaveBeenCalledTimes(1);
        expect(console.info.mock.results[0].value).toBe('This is a returned value');
    });

    test('Function printQuotes - should print a text using author and quote data in a map', () => {
        console.info = jest
            .fn()

        const map = new Map;
        map.set('Willy', 'It is a beautiful world.');
        printQuotes(map);
        expect(console.info).toHaveBeenCalledTimes(1);
        expect(console.info.mock.calls[0][0]).toBe('Willy says, \"It is a beautiful world.\"');
    });

    test('Function printQuotes - should print a text using author and quote data in a map', () => {
        console.info = jest
            .fn()

        const map = new Map;
        map.set('Willy', 'It is a beautiful world.');
        map.set('Billy', 'It is a evil world.');
        printQuotes(map);
        expect(console.info).toHaveBeenCalledTimes(2);
        expect(console.info.mock.calls[0][0]).toBe('Willy says, \"It is a beautiful world.\"');
        expect(console.info.mock.calls[1][0]).toBe('Billy says, \"It is a evil world.\"');
    });
});