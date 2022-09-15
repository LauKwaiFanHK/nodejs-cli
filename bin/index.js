import TipCalculator from './TipCalculator.js';

function runTipCalculator() {
    try {
        TipCalculator();
    }
    catch (error) {
        console.error(error);
    }
};

runTipCalculator();