export const range = (count) => {
    return [...Array(count).keys()];
};

export const getWordsLength = (n, array) => {
    if (n > 5 && n < 21) {
        return array[2];
    } else if (n > 1 && n < 5) {
        return array[1];
    } else if (n === 1) {
        return array[0];
    } else {
        return array[2];
    }
};

export const getWordsLengthFromValue = (n, array) => n.toLocaleString() + ' ' + getWordsLength(n, array);

export const getValidValue = (value, min, max) => {
    let validValue = Number.parseFloat(value) || min;
    if (validValue < min) { 
        validValue = min;
    } else if (validValue > max) {
        validValue = max;
    }
    return validValue;
};

export const getPercentOfCost = (value, cost) => Math.ceil((value / cost) * 100);

export const getCostOfPercent = (percent, cost) => Math.ceil(cost * (percent / 100));


