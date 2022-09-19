import QuoteStorage from "./quoteStorage.js";

function startQuoteStorage() {
    try {
        QuoteStorage();
    }
    catch (err) {
        console.log(err);
    }
};

startQuoteStorage();