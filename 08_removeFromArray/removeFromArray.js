const removeFromArray = function (arr, ...numRemoved) {
    let args = [...arguments]
    return arr.filter((item) => {
        return !numRemoved.includes(item)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
