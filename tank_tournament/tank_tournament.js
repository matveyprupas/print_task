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












function secondFightsHash( max ) {
    let hash = {};
    let com = 1;

    for (let i = 0; i < Infinity; i++) {
        let fights = com * i;
        hash[fights] = com;
        com += 2;
        if (fights >= max) break;
    }

    console.log(hash);
    return hash;
}

secondFightsHash (10**18);












function solve(str) {
    let res = [];
    let fights = +str;

    function onlyFirstFights (fights, mult) {
        let res = fights - 2**mult;    
        if (res === 0) {
            return 2**(mult + 1);
        } else if (res > 0) {
            return onlyFirstFights(res, mult + 1)
        } else {
            return;
        }
    }

    let onlyFirstFightsVar = onlyFirstFights (fights, 0);

    if (onlyFirstFightsVar) res.push( onlyFirstFightsVar );












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

// const fs = require('fs')
// const input = fs.readFileSync(0, 'utf-8')
// console.log(solve(12));

// console.log(solve(15));
// console.log(solve(12));
// console.log(solve(28));
let com = 15;
console.log( (com * (com - 1)) / 2 );

// console.log(primeNumbersArr());

// console.log(solve(12));
// console.log(solve(20));
// console.log(solve(input));