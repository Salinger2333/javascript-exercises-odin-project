const sumAll = function (...args) {
    let sortedArgs = args.sort((a, b) => {
        return a - b
    })
    let count = sortedArgs[1] - sortedArgs[0] + 1
    return (sortedArgs[0] + sortedArgs[1]) * count / 2
};

// Do not edit below this line
module.exports = sumAll;
