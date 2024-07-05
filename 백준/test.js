// 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const points = [];
let numInput = 0;
let count = 0;
let answer = '';
rl.on("line", (line) => {
    if(numInput === 0){
        numInput = parseInt(line.trim(),10);
    }else{
        const point = line.split(' ').map(Number);
        points.push(point);
        count++;
    }

    if(count === numInput){
        rl.close();
    }
}).on("close", () => {
    function compare(a,b){
        if(a[0] !== b[0]){
            return a[0] - b[0];
        }else{
            return a[1] - b[1];
        }
    }
    points.sort(compare);

    points.map((data)=>{
        answer = answer + data.join(' ') + '\n';
    })

    console.log(answer);
    process.exit();
});


const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.on("line",(line)=>{

}).on("close",()=>{

})