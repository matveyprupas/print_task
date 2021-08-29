function solve(str) {
    let res = [];
    let fights = +str;
    let onlyFirstFights = []; // number of fights when will only first part of tournament
    let onlySecondFights = secondFights(fights); // number of fights when will only second part of tournament

    function secondFights (fights) {
        let mult = 0;
        let startI = fights > 49999985000001 ? 9999999 : 
                     fights > 49985001 ? 9999 : 1;
        for (let i = startI; i < Infinity; i += 2) {
            let ifigh = i * mult++
            if (ifigh === fights) return i;
            if (ifigh > fights) break;
        }
    }

    if (onlySecondFights) res.push(onlySecondFights) ;


    function firstFights (commands) {
        let first = 0;
        if (commands % 2) {
            return first;
        } else {
            first = commands / 2;
            return first + firstFights(commands / 2);
        }
    }

    for (let i = 1; i <= 60; i++) {
        onlyFirstFights.push(firstFights(2**i));
    }

    if (onlyFirstFights.includes(fights)) res.push( (fights + 1) );


    return res;
}

// const fs = require('fs')
// const input = fs.readFileSync(0, 'utf-8')

console.log(solve(3));
// console.log(solve(4));

// console.log(solve(12));
// console.log(solve(20));
// console.log(solve(input));