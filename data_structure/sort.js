//1. 정수에 대하여 오름차순 정렬하는 코드 예시
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare(a,b){
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

arr.sort(compare);

console.log(arr)
//[1, 2, 3, 5, 7, 8, 9, 15, 21]


//2. 더 간결한 예시
let arr1 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare1(a, b){
    return a - b;
}
arr1.sort(compare);

console.log(arr1);
//[1, 2, 3, 5, 7, 8, 9, 15, 21]

//3. 비교 함수를 한 줄에 정의하여 곧 바로 적용할 수 있다.
let arr2 = [1, 8, 5, 9, 21, 3, 7, 2, 15];

arr2.sort(function(a,b){
    return a - b;
});

console.log(arr2);
//[1, 2, 3, 5, 7, 8, 9, 15, 21]

//4. 내림차순 정렬 예시 : a가 b보다 클 때, 반환 값이 음수가 되어 a가 앞에 위치한다
let arr3 = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare3(a, b){
    return b - a;
}
arr3.sort(compare3);
console.log(arr3);
//[21, 15, 9, 8, 7, 5, 3, 2, 1]

//5. 문자열에 대한 오름차순 정렬 예시
let arr4 = ["fineapple", "banana", "durian", "apple", "carrot"];
arr4.sort();
console.log(arr4);
//['apple', 'banana', 'carrot', 'durian', 'fineapple']

//6. 문자열에 대한 내림차순 정렬 예시
let arr5 = ["fineapple", "banana", "durian", "apple", "carrot"];
function compare5(a, b){
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}
arr5.sort(compare5);
console.log(arr5);
//['fineapple', 'durian', 'carrot', 'banana', 'apple']

//7. 문자열에 대한 오름차순 정렬 예시 (대소문자 구분 X)
let arr6 = ["fineapple", "Banana", "durian", "Apple", "carrot"];
function compare6(a, b){
    let upperCaseA = a.toUpperCase();
    let upperCaseB = b.toUpperCase();
    if (upperCaseA < upperCaseB) return -1;
    else if (upperCaseA > upperCaseB) return 1;
    else return 0;
}
arr6.sort(compare6);
console.log(arr6);
//['Apple', 'Banana', 'carrot', 'durian', 'fineapple']

//8. 객체에 대하여 원하는 기준으로 오름차순 정렬 예시
//성적 점수가 높은 순으로 학생 데이터를 나열
let arr7 = [
    { name : "홍길동", score : 90},
    { name : "김철수", score : 85},
    { name : "박영희", score : 97}
]
function compare7(a, b){
    return b.score - a.score
}
arr7.sort(compare7);
console.log(arr7);
//[{name : '박영희', score : 97}, {name : '홍길동', score : 90}, {name : '김철수', score : 85}]
