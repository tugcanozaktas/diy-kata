const numberToReversedDigits = number => {
    var arr = number.toString().split("");
    var reversed = [];
    for(let i = arr.length-1; i >= 0; i--){
        reversed.push(Number(arr[i]));
    }
    return reversed;

};

module.exports = numberToReversedDigits;
