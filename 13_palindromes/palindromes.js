// const palindromes = function (str) {
//     str = str.toLowerCase().replaceAll(',', '').replaceAll('.', '').replaceAll(' ', '')
//     const reverStr = str.split('').reverse().join('')
//     return str === reverStr
// };
const palindromes = function (str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const cleanStr = str
        .toLowerCase()
        .split('')
        .filter((item) => alpha.includes(item))
        .join('')
    return cleanStr === cleanStr.split('').reverse().join('')
}

// Do not edit below this line
module.exports = palindromes;
