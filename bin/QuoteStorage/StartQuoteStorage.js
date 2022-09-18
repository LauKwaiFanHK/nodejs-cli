import QuoteStorage from "./QuoteStorage.js";

function startQuoteStorage() {
    try {
        QuoteStorage();
    }
    catch (err) {
        console.log(err);
    }
};

startQuoteStorage();