const sumAll = function(a, b) {
    
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) || typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }


    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
