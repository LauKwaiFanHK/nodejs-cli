import GreetingMachine from './GreetingMachine.js';

function startGreeting() {
    try {
        GreetingMachine();
    } catch (error) {
        console.error(error);
    }
};

startGreeting();