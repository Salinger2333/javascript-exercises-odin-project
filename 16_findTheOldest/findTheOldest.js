
const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}
const findTheOldest = function (people) {
    return people.reduce((oldest, curPeople) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const curAge = getAge(
            curPeople.yearOfBirth,
            curPeople.yearOfDeath
        )
        return oldestAge < curAge ? curPeople : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
