import RetirementCalculator from "./retirementCalculator.js";

function startRetirementCalculator() {
    try {
        RetirementCalculator();
    } catch (err) {
        console.log(err);
    }
};

startRetirementCalculator();