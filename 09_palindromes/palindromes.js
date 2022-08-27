const palindromes = function (a) {
    a_clean = a.toLowerCase().replace(/\W/g, '')
    reversed_a = a_clean.split("").reverse().join("");
    return reversed_a == a_clean;
};

// Do not edit below this line
module.exports = palindromes;
