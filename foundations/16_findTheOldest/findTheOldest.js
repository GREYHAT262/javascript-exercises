const getAge = function(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    const sortByDescendingAge = people.toSorted((p1, p2) => getAge(p2) - getAge(p1));
    return sortByDescendingAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
