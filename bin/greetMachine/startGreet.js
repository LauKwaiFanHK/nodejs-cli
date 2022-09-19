import GreetingMachine from './greetingMachine.js';

export function startGreeting() {
    try {
        GreetingMachine();
    } catch (error) {
        console.error(error);
    }
};

startGreeting();