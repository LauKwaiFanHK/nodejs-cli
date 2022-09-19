#!/usr/bin/env node
import Inquirer from 'inquirer';

// An inquirer's prompt to ask for a user's name
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate(answer) {
            if (!answer) {
                return 'Please tell me your name!'
            }
            return true
        }
    }
];

// Function to concatenate names in the array 'names' with a comma between two names 
function concatenateNames(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            str += arr[i];
        } else {
            str += ', ' + arr[i];
        }
    }
    return str;
};

// A module to ask for users' name repeatedly,
// and greet all users after a user entered his name
const GreetingMachine = () => {
    let status = 'started';
    let names = [];

    function requestName() {
        Inquirer
            .prompt(questions)
            .then(answers => {
                names.push(answers.name);
                const names_str = concatenateNames(names);
                console.info(`Hello ${names_str}! my name is Greeting Machine, nice to meet you!`);
                status = 'ended';
                console.log('*********************************');
                if (status === 'ended') {
                    requestName();
                }
            })
            .catch((error) => {
                if (error.isTtyError) {
                    console.log("Your console environment is not supported!")
                } else {
                    console.log(error)
                }
            })
    };

    requestName();
};

export default GreetingMachine;