const reverseString = function(str) {
    const reversedStr = [];
    for(let i = 0; i< str.length;i++) {
        reversedStr[i] = str.charAt(str.length - i - 1);
    }
    return reversedStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
