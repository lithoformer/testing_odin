function analyzeArray(arr) {
    let obj = {};
    obj.average = average(arr);
    obj.min = min(arr);
    obj.max = max(arr);
    obj.length = length(arr);
    return obj;
}

function average(arr) {
    return arr.reduce((acc, sum) => sum + acc, 0) / arr.length;
}

function min(arr) {
    const sorted = arr.sort((a, b) => a - b);
    return sorted[0];
}

function max(arr) {
    const sorted = arr.sort((a, b) => a - b);
    return sorted[sorted.length - 1];
}

function length(arr) {
    return arr.length;
}

module.exports = analyzeArray;