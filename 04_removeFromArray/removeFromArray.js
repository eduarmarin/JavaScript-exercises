function removeFromArray(array, ...args) {
    return array.filter(x => !args.includes(x))
};


console.log(removeFromArray([1, 2, 3], 1));
// Do not edit below this line
module.exports = removeFromArray;
