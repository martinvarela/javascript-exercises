const findTheOldest = function (people) {
    let oldest = false;
    let oldest_age = 0;
    people.forEach(person => {
        let person_age = getPersonAge(person.yearOfBirth, person.yearOfDeath);
        if (person_age > oldest_age) {
            oldest_age = person_age;
            oldest = person;
        }
    });
    return oldest;

    ;
};

const getPersonAge = function (birth, end) {
    if (!end) {
        end = new Date().getFullYear();
    }
    return end - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
