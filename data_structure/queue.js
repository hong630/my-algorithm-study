//자바스크립트로 큐 구현
class Queue{
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++
    }
    dequeue(){
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex ++
        return item;
    }
    peek(){
        return this.items[this.headIndex];
    }
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

//구현된 큐 라이브러리 사용
let queue = new Queue();

queue.enqueue(5); // 5삽입
queue.enqueue(2); // 2삽입
queue.enqueue(3); // 3삽입
queue.enqueue(7); // 7삽입
queue.dequeue(); // 삭제
queue.enqueue(1); // 1삽입
queue.enqueue(4); // 4삽입
queue.dequeue(); // 삭제

//먼저 들어온 순서대로 출력
while (queue.getLength() != 0){
    console.log(queue.dequeue());
    //결과
    //3
    //7
    //1
    //4
}