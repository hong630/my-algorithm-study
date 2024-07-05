//배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자. [sort]


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let answer = '';
let number;
rl.on("line", (line) => {
    number = line;
    rl.close();
}).on("close", () => {
    let countArr = Array(10).fill(0);
    for(let x of number){
        countArr[Number(x)]++
    }
    for(let i= 9; i>=0; i--){
        for (let j=0; j<countArr[i]; j++){
            answer = answer + i
        }
    }
    console.log(answer);
    process.exit();
});
