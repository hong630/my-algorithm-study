/*
*[greedy]
*  준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.
* */


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let numInput = 0;
let price = 0;
let coinArr = [];
let count = 0;
let answer = '';

rl.on("line", (line) => {
    if(numInput === 0){
        numInput = parseInt(line.split(' ')[0],10);
        price = parseInt(line.split(' ')[1],10);
    }else{
        const coin = parseInt(line.trim(),10);
        coinArr.push(coin);
        count ++
    }
    if(count === numInput){
        rl.close();
    }
}).on("close", () => {
    //coinArr의 뒷자리부터 계산
    //price/coin 했을 때 나오는 정수
    //price/coin 했을 때 나오는 정수가 0이면 다음으로 넘어감
    //price - coin*count1 > 0 면 다음으로 넘어감
    //count + count1
    let coinCount = 0;
    for(let i = (numInput - 1); i>=0; i--){
        let n = Math.floor(price/coinArr[i]);
        if(n >= 1 && price>0){
            price = price - (coinArr[i]*n);
            coinCount = coinCount + n;
        }
    }
    console.log(coinCount);
    process.exit();
});


