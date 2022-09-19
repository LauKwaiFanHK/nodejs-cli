import TipCalculator from './tipCalculator.js';

function StartTipCalculator() {
    try {
        TipCalculator();
    }
    catch (error) {
        console.error(error);
    }
};

StartTipCalculator();