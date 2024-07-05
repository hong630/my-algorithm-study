/*
* [sort]
* 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
* */


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let words = [];
let numInput = 0;
rl.on("line", (line) => {
    if(numInput === 0){
        numInput = parseInt(line.trim(),10);
    }else{
        words = line.split(' ').map(Number);
        rl.close();
    }
}).on("close", () => {
    const newWords = [...new Set(words)];
    function compare(a,b){
        return a-b;
    }
    newWords.sort(compare);
    let indexMap = new Map();
    newWords.map((val,idx)=>{indexMap.set(val,idx)});
    let resultArr = [];
    words.map((val)=>{resultArr.push(indexMap.get(val))})
    console.log(resultArr.join(' '));
    process.exit();
});
