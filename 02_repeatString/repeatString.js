var string1 = 'hola';
var n = 3;
const element = new Array(n);

const repeatString = function(string1, n) {
for ( let i = 0; i < n; i++) {
    element[i]=string1;
    console.log(element);
    }
    console.log(element.join(''));
    return (element.join(''));
};

// Do not edit below this line
module.exports = repeatString;
