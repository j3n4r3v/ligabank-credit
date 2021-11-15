
const MIN_WORD_LENGTH = 1;
const MIDDLE_WORD_LENGTH = 5;
const MAX_WORD_LENGTH = 21;

const MIN_INDEX = 0;
const MIDDLE_INDEX = 1;
const MAX_INDEX = 2;

const range = (count) => {
    return [...Array(count).keys()];
};

const getWordsLength = (n, array) => {
    if (n > MIDDLE_WORD_LENGTH && n < MAX_WORD_LENGTH) {
        return array[MAX_INDEX];
    } else if (n > MIN_WORD_LENGTH && n < MIDDLE_WORD_LENGTH) {
        return array[MIDDLE_INDEX];
    } else if (n === MIDDLE_INDEX) {
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

const getPercentOfCost = (value, cost) => Math.ceil((value / cost) * 100);

const getCostOfPercent = (percent, cost) => Math.ceil(cost * (percent / 100));


export {range, getWordsLength, getWordsLengthFromValue, getValidValue, getPercentOfCost,  getCostOfPercent}