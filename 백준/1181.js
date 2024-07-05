/*[sort]
* 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

길이가 짧은 것부터
길이가 같으면 사전 순으로
단, 중복된 단어는 하나만 남기고 제거해야 한다.
* */


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let words = [];
let word = '';
let numInput = 0;
let count = 0;
let answer = '';
let filteredWords;
rl.on("line", (line) => {
    if(numInput === 0){
        numInput = parseInt(line.trim(),10);
    }else{
        word = line.trim().toString();
        words.push(word);
        count++;
    }

    if(count === numInput){
        rl.close();
    }
}).on("close", () => {
    words = [...new Set(words)];
    function wordLengthCompare(a,b){
        if(a.length === b.length){
            if(a > b){
                return 1
            }else if(a < b){
                return -1
            }else{
                return 0
            }
        }else{
            return a.length - b.length;
        }
    }
    words.sort(wordLengthCompare);
    words.map((word)=>{
        answer = answer+ word.trim().toString()  + '\n';
    })
    console.log(answer);
    process.exit();
});
