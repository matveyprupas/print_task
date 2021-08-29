function print(str) {
    let resStr = '';

    let result = str
    .split(',')
    .map(el => +el)
    .sort( (a,b)=>a-b )
    .filter( (el, i, arr) => el !== arr[i-1] );
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
        if (result[i] - 1 !== result[i-1] && result[i] + 1 === result[i+1]) {
            resStr += result[i];
            continue;
        }
        if(result[i] + 1 === result[i+1]) continue; 
        if(result[i] - 1 === result[i-1]) {
            resStr += "-" + result[i] + ",";
            continue;
        }
        resStr += result[i] + ",";
    }
    resStr = resStr.trim();
    if (resStr[resStr.length - 1] === ",") {
        resStr = resStr.slice(0, -1);
        // console.log(resStr);
    }

    return resStr;
}
// console.log(print("1,3,1,4,5"));
// console.log(print("1,3,1,6,7,8,9,12,125,16,4,5"));
// console.log(print("1,3,1,4,5"));

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
console.log(print(input));