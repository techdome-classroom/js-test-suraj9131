/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    function romanToInt(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentSymbolValue = romanNumerals[s[i]];
        const nextSymbolValue = romanNumerals[s[i + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            result += nextSymbolValue - currentSymbolValue;
            i++; // Skip the next symbol since it's already considered
        } else {
            result += currentSymbolValue;
        }
    }

    return result;
}
};


module.exports={romanToInt}
