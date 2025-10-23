const removeFromArray = function (arr, ...numRemoved) {

    return arr.filter((item) => {
        return !numRemoved.includes(item)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
