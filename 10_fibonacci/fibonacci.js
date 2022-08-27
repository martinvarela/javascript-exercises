const fibonacci = function(member) {
    if (member < 0) return 'OOPS';
    if (member === 0) return 0;
    previous = 0;
    actual = 1;
    for (let i=1; i < member; i++) {
        temp = actual;
        actual = actual + previous;
        previous = temp;
    }
    return actual;
};

// Do not edit below this line
module.exports = fibonacci;
