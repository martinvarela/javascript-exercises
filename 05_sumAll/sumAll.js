const sumAll = function(a, b) {
    res = 0;
    if (typeof(a) != 'number' || typeof(b) != 'number' || a<0 || b<0) {
        return "ERROR";
    }
    if (a<b) {
        start = a;
        end = b;        
    } else {
        start = b;
        end = a;
    }

    for (let index = start; index <= end; index++) {
        res += index;        
    }
    return res;

};

// Do not edit below this line
module.exports = sumAll;
