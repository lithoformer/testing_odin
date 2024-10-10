function reverseString(str) {
    const strArr = str.split('');
    return strArr.reverse().join('');
}

module.exports = reverseString;