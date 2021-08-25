function print(str) {
    let resStr = '';

    let result = str
    .split(',')
    .map(el => +el)
    .sort( (a,b)=>a-b )
    .filter( (el, i, arr) => el !== arr[i-1] );

    for (let i = 0; i < result.length; i++) {
        if (result[i] - 1 !== result[i-1] && result[i] + 1 === result[i+1]) {
            resStr += result[i];
            continue;
        }
        if(result[i] + 1 === result[i+1]) continue; 
        if(result[i] - 1 === result[i-1]) {
            resStr += "-" + result[i];
            continue;
        }
        resStr += result[i] + ",";
    }

    return resStr.trim();
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
console.log(print(input));