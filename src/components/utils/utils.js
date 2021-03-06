const MIN_WORD_LENGTH = 1;
const MIDDLE_WORD_LENGTH = 5;
const MAX_MIDDLE_WORD_LENGTH = 24;
const MAX_WORD_LENGTH = 21;
const MAX_OF_MAX_WORD_LENGTH = 25;
const MIN_INDEX = 0;
const MIDDLE_INDEX = 1;
const MAX_INDEX = 2;
const MAX_PERCENT = 100;

const range = (count) => {
    return [...Array(count).keys()];
};

const getWordsLength = (n, array) => {
    n = n % 100;
    if ((n >= MIDDLE_WORD_LENGTH && n < MAX_WORD_LENGTH)  || (n >= MAX_OF_MAX_WORD_LENGTH) ) {
        return array[MAX_INDEX];
    } else if ((n > MIN_WORD_LENGTH && n < MIDDLE_WORD_LENGTH) || (n > MAX_WORD_LENGTH && n <= MAX_MIDDLE_WORD_LENGTH)) {
        return array[MIDDLE_INDEX];
    } else if (n === MIDDLE_INDEX || n === MAX_WORD_LENGTH) {
        return array[MIN_INDEX];
    } else {
        return array[MAX_INDEX];
    }
};

const getWordsLengthFromValue = (n, array) => n.toLocaleString() + ' ' + getWordsLength(n, array);

const getValidValue = (value, min, max) => {
    let validValue = Number.parseFloat(value) || min;
    if (validValue < min) { 
        validValue = min;
    } else if (validValue > max) {
        validValue = max;
    }
    return validValue;
};

const getPercentOfCost = (value, cost) => Math.ceil((value / cost) * MAX_PERCENT);

const getCostOfPercent = (percent, cost) => Math.ceil(cost * (percent / MAX_PERCENT));


export {range, getWordsLength, getWordsLengthFromValue, getValidValue, getPercentOfCost,  getCostOfPercent}