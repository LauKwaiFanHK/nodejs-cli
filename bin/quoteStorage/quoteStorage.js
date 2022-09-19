#!/usr/bin/env node
import QuoteEnquiry from './quoteEnquiry.js';

// A module that store quotes and authors using a map object
const QuoteStorage = () => {
    let quoteMap = new Map();
    QuoteEnquiry(quoteMap);
};

export default QuoteStorage;