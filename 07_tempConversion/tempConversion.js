let fahrenheit1=0;
let celsius1=-10;

const convertToCelsius = function() {
    let c = ((fahrenheit1 - 32) * 5) / 9;
    c = parseFloat(c.toFixed(1));
    //c= c.toFixed(1);
    console.log(c);
    return(c);
};

const convertToFahrenheit = function() {
    let f = (parseFloat(celsius1) * 9) / 5 + 32;
    f = parseFloat(f.toFixed(1));
    return(f)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
