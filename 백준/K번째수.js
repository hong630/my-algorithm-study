/*
* 수 N개 A1, A2, ..., AN이 주어진다. A를 오름차순 정렬했을 때, 앞에서부터 K번째 있는 수를 구하는 프로그램을 작성하시오.
*
* 입력 : 첫째 줄에 N(1 ≤ N ≤ 5,000,000)과 K (1 ≤ K ≤ N)이 주어진다. 둘째에는 A1, A2, ..., AN이 주어진다. (-109 ≤ Ai ≤ 109)
* 출력 : A를 정렬했을 때, 앞에서부터 K번째 있는 수를 출력한다.
* */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr.sort(function(a,b){
    return a - b;
})

let answer = arr[k-1];
console.log(answer);

