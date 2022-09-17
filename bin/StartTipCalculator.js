import TipCalculator from './TipCalculator.js';

function StartTipCalculator() {
    try {
        TipCalculator();
    }
    catch (error) {
        console.error(error);
    }
};

StartTipCalculator();