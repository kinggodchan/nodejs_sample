//변수는 함수처럼 호출 할 수 없다.
var message = "Hello!";
message.toLowerCase();
message(); ////문법이 틀려도 js에서는 문제를 인지하고 못하고 있다.
//실행되었을때 그떄 잘못되었다고 알려준다.



const value = Math.random() <0.5? "a": "b";//삼항연산자자
if(value !== "a") {

}else if (value === "b") {
    
}

function flipCoin() {
    return Math.random() < 0.5; //함수를 실행할려면 괄호()가 필요하다.
}
