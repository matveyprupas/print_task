function solve(str) {
    let res = [];
    let n = +str;

    function firstFights (num) {
        let first = 0;
        if (num % 2) {
            return first;
        } else {
            first = num / 2;
            return first + firstFights(num / 2);
        }
    }

    function secondFights (num) {
        return (num * (num - 1)) / 2; 
    }

    let first = firstFights(n);
    let leftCommands = n - first;
    let second = secondFights(leftCommands);
    res.push(first + second);

    for (let i = n-10; i < n + 10; i++) {  
        let first = firstFights(i);
        let leftCommands = i - first;
        let second = secondFights(leftCommands);
        if (first + second === res[0]) res.push(i); 
    }


    console.log("first: " + first, "second: " + second);
    return res;
}

// const fs = require('fs')
// const input = fs.readFileSync(0, 'utf-8')

console.log(solve(3));
console.log(solve(4));

console.log(solve(12));
console.log(solve(20));
// console.log(solve(input));