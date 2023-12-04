const findLongestWord = function (string) {
    return string.split(" ").sort((i, j) => i.length - j.length).reverse()[0]
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'