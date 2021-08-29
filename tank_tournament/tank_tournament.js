function primeNumbersArr() {
    let res = [2, 3, 5, 7];
    for (let i = 4; i < 1000; i++) {
        if (!(i % 2)) continue;
        if (!(i % 3)) continue;
        if (!(i % 5)) continue;
        if (!(i % 7)) continue;
        res.push(i);
    }
    return res;
}

function solve(str) {
    let res = [];
    let fights = +str;
    let onlyFirstFights = [];
    let onlySecondFights = secondFights(fights);

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

    function fsFights(fights, x) {
        let res = 0;
        let primeArr = primeNumbersArr();
        // if (fights % 2) return;
        primeArrMax = primeArr.filter(el => !(fights % el)).sort((a, b) => b-a )[0];

        let secondFights = (primeArrMax * (primeArrMax - 1)) / 2;
        if (primeArr.includes(fights - secondFights)) {
            return res += (fights - secondFights) * 2 * x;
        } else {
            return res += fsFights (fights - secondFights, 2);
        }
    }
    
    res.push(fsFights(fights, 1));

    return res.sort((a, b) => a-b).join('\n');
}

const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
// console.log(solve(12));

// console.log(solve(15));
// console.log(solve(12));
// console.log(solve(28));
// console.log(solve(25));

// console.log(primeNumbersArr());

// console.log(solve(12));
// console.log(solve(20));
console.log(solve(input));