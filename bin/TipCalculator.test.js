import TipCalculator from './TipCalculator';
import inquirer from 'inquirer';

jest.mock('inquirer');

describe('TipCalculator', () => {
    it('Should calculate', async () => {
        expect.assertions(1);
        inquirer.prompt = jest.fn().mockResolvedValue({ email: 'some@example.com' });

        await expect(TipCalculator()).resolves.toEqual({ email: 'some@example.com' });
    });
})