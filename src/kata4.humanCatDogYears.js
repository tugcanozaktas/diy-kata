const humanCatDogYears = number => {
    var humanYears = number;
    var catYears = 15 + 9 + ((humanYears-2)*4);
    var dogYears = 15 + 9 + ((humanYears-2)*5);
    
    return [humanYears, catYears, dogYears];
};

module.exports = humanCatDogYears;
