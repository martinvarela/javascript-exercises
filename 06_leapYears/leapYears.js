const leapYears = function(year) {
    leap = year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)  
    return leap
};

// Do not edit below this line
module.exports = leapYears;
