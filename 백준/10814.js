/*
[sort]
온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
* */


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let users = [];
let numInput = 0;
let count = 0;
let answer = '';
rl.on("line", (line) => {
    if(numInput === 0){
        numInput = parseInt(line.trim(),10);
    }else{
        //arr에 정보 저장 [x,y]형태로
        const user = line.split(' ');
        users.push(user);
        count++
    }
    if(count === numInput){
        rl.close()
    }
}).on("close", () => {
    //비교함수
    function compare(a,b){
        const aNum = Number(a[0]);
        const bNum = Number(b[0]);
        return aNum - bNum;
    }
    //sort
    users.sort(compare);
    //출력
    users.map((val)=>{
        answer = answer +  val[0] + ' ' + val[1] + '\n'
    })
    console.log(answer);
    process.exit();
});