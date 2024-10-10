function caesarCipher(str, key) {
    const strArr = str.split('');
    const output = [];
    for (let char of strArr) {
        if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
            if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
                let currCharCode = char.charCodeAt(0);
                if (currCharCode + key > 90) {
                    currCharCode = ((currCharCode + key) % 90) + 64;
                    char = String.fromCharCode(currCharCode);
                    output.push(char);
                }
                else {
                    currCharCode += key;
                    char = String.fromCharCode(currCharCode);
                    output.push(char);
                }
            }
            else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
                let currCharCode = char.charCodeAt(0);
                if (currCharCode + key > 122) {
                    currCharCode = ((currCharCode + key) % 122) + 96;
                    char = String.fromCharCode(currCharCode);
                    output.push(char);
                }
                else {
                    currCharCode += key;
                    char = String.fromCharCode(currCharCode);
                    output.push(char);
                }
            }
        }
        else {
            output.push(char);
        }
    }
    return output.join('');
}

module.exports = caesarCipher;