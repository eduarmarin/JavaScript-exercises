let a=-10;
let b=4;
const sumAll = function(a, b) {
    if (b<a){
        let x=b;
        b=a;
        a=x;
    }

    let summa=0;
    if(a>0 && b>0){
        for(let i=a; i<=b; i++){
        summa += i;
    }
    }else{
        summa="ERROR";
    }
    console.log(summa);
    return(summa);
};

// Do not edit below this line
module.exports = sumAll;
