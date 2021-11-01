export const range = (count) => {
    return [...Array(count).keys()];
};

export const getWords = (n, array) => {
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

export const getWordsFromValue = (n, array) => n.toLocaleString() + ' ' + getWords(n, array);