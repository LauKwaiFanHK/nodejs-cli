import inquirer from 'inquirer';
import Employee from './Employee.js';

// Ask user for name and year of birth and prompt for answers
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name',
        validate: (answer) => {
            if (!answer) {
                return 'Please enter your name.'
            } else if (typeof answer !== 'string') { // Ensure user entered a string of characters
                return 'Your name must be composed of characters.'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'yearOfBirth',
        message: 'In which year were you born?',
        validate: (answer) => {
            if (!answer) {
                return 'Please enter then year which you are born.'
            } else if (!Number.isInteger(Number(answer)) || answer.length !== 4) { // Check the entered year is a number and is a valid year
                return 'Invalid year, a year must be a whole number and have four digits.'
            }
            return true;
        }
    }
];

// Calculate the number of years until retirement and show results to the user
// First argument is an array of answers of two questions from the first prompt
// Second argument is the answer of the question from the second prompt
const displayResults = (answers, yearToRetire) => {
    const employee = new Employee(answers.name, answers.yearOfBirth);
    const currentAge = employee.calculateAge();
    const currentYear = new Date().getFullYear();
    const yearsDifference = yearToRetire - currentYear;
    console.info(`${answers.name} is ${currentAge} years old now.`);
    if (yearsDifference === 0) {
        console.info(`${answers.name} retire in this year.`);
    } else if (yearsDifference < 0) {
        console.info(`It's ${currentYear}, ${answers.name} have already retired for ${Math.abs(yearsDifference)}.`)
    } else {
        console.info(`Still ${yearsDifference} years left until retirement.`);
        console.info(`It's ${currentYear}, ${answers.name} can retire in ${yearToRetire}.`);
    }
};

// A module to calculate the years until retirement based on user's current age,
// desired year to retire
const RetirementCalculator = () => {
    inquirer
        .prompt(questions)
        .then((answers) => { // year of birth is required to validate year to retire, therefore need to resolve the first prompt first
            inquirer.prompt([{ // After the first promise is settled, use the resolved promise to prompt for year to retire
                type: 'input',
                name: 'yearToRetire',
                message: 'In which year do you want to retire?',
                validate: (answer) => {
                    if (!answer) {
                        return 'Please enter the year you want to retire.'
                    } else if (!Number.isInteger(Number(answer)) || answer.length !== 4) {
                        return 'Invalid year, a year must be a whole number and have four digits.'
                    } else if (answer <= answers.yearOfBirth) { // Ensure the entered year to retire is after year of birth 
                        return 'Year to retire must be bigger than year of birth.'
                    }
                    return true
                }
            }]).then((answer) => { // After the second prompt is settled, show the results based on the first and second resolved promises 
                displayResults(answers, answer.yearToRetire);
            })
        })
        .catch((error) => {
            console.log(error);
        })
};

export default RetirementCalculator