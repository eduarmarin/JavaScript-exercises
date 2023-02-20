var string1 = 'hello';
const reverseString = function(string1) {
    const reverseString2 = string1.split("").reverse().join('');
    console.log(reverseString2);
        
    return(reverseString2);
};  

// Do not edit below this line
module.exports = reverseString;
