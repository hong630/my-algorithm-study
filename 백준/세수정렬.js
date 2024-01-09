/*
* 동규는 세수를 하다가 정렬이 하고 싶어졌다.
정수 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어졌다.
정수 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.
*
* 정수 세 개가 주어진다. 이 수는 1보다 크거나 같고, 1,000,000보다 작거나 같다. 이 수는 모두 다르다.
* */

//fs모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(' ').map(Number);
arr.sort(function(a,b){
    return a - b;
})

let answer = "";
for(let i=0; i<arr.length; i++){
    answer += arr[i] + " ";
}
console.log(answer);


//선택 정렬 함수를 이용해 풀이
function selectionSort(arr){ //선택 정렬 함수
    for (let i=0; i<arr.length; i++){
        let minIndex = i //가장 작은 원소의 인덱스
        for (let j = i+1; j<arr.length ; j++){
            if(arr[minIndex] > arr[j]) minIndex = j;
        }
        let temp = arr[i]; //스와프(swap)
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input[0].split(' ').map(Number);
selectionSort(arr);
let answer = "";
for(let i=0; i<arr.length; i++){
    answer += arr[i] + " ";
}
console.log(answer);