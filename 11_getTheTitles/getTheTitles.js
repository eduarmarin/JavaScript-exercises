const getTheTitles = function(books) {
    var tittles = [];

    for (let i = 0; i < 2; i++) {
        let tittle = books[i].title; 
        tittles.push(tittle);
        console.log('inside '+tittle);
    }
    console.log('tittles '+tittles);
    return tittles;
};

// Do not edit below this line
module.exports = getTheTitles;
