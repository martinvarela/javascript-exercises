const reverseString = function(s) {
    result = ''
    for (let index=s.length-1; index >= 0; index--) {
        result += s[index];
    }
    return result

};

// Do not edit below this line
module.exports = reverseString;
