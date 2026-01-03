const palindromes = function (str) {
    const processedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = processedStr.split('').reverse().join('');
    return processedStr === reversedStr;
};

palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
