const repeatString = function (string, num) {
    if (num >= 0) {
        let repeatString = ''
        for (i = 1; i <= num; i++) {
            repeatString += string
        }
        return repeatString
    } else return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
