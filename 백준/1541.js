/*
*
* [greedy]
* 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.
* */


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let problemArr;
let operators = ['+', '-'];
let number = '';
let resultArr = [];
rl.on("line", (line) => {
    problemArr = line.split('');
    rl.close();
}).on("close", () => {
    for (let i = 0; i<problemArr.length; i++){
        if(operators.includes(problemArr[i])){
            if(number !== ''){
                resultArr.push(number);
                number = '';
            }
            resultArr.push(problemArr[i]);
        }else{
            number = number + problemArr[i];
        }
    }
    if(number !== ''){
        resultArr.push(number);
    }
    let newArr = [];
    let minusExist = false;
    for(let i =0; i<resultArr.length; i++){
        if(i !== (resultArr.length -1) && resultArr[i] === '-'){
            minusExist = true;
        }
        if(minusExist === true && resultArr[i] === '+'){
            resultArr[i] = '-'
        }
    }
    for(let i =0; i<resultArr.length; i++){
        if(resultArr[i] === '+'){
            newArr.push(Number(resultArr[i+1]))
        }else if(resultArr[i] === '-'){
            newArr.push(-1 * Number(resultArr[i+1]))
        }else{
            if(i===0){
                newArr.push(Number(resultArr[i]));
            }
        }
    }
    let answer = 0;
    for(let i = 0; i<newArr.length; i++){
        answer = answer + newArr[i];
    }
    console.log(answer);
    process.exit();
});
