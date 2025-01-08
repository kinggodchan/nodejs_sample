//변수는 함수처럼 호출 할 수 없다.
const message = "Hello!"; 
//Accessing the property 'toLowerCase'
//on 'message' and the calling it

message.toLowerCase();
//Calling 'message'
//message(); 


const annoucement = "Hello World!";
//announcement.toLocaleLowerCase();
//announcement.toLocaleLowerCase();

annoucement.toLocaleLowerCase();


const value = Math.random() <0.5? "a": "b";//삼항연산자자
if(value !== "a") {

}else if (value === "a") {
    
}

function flipCoin() {
    return Math.random() < 0.5; //함수를 실행할려면 괄호()가 필요하다.
}


//1.추론적 타입지정
let x = 3;
// x = [0,1,null];

class Animal {}
class Rhino extends Animal{
    hasHorn: boolean = true;
}

class Elephant extends Animal{
    hasHorn: boolean = true;
}

class Snake extends Animal{
    hasHorn: boolean = true;
}

let zoo = [new Rhino(), new Elephant(), new Snake()]; //객체를 가지고 있는 배열열
// animal[] 추론 추측, 그러나 다른 타입이 지정됨.


//2.명시적 타입 지정(EXplict Types)  파라미터는 필수적이다.
// this is an industrial-grade general-purpose greeter function;
function greet(person:string, date:Date) {
    console.log(`Hello ${person}, today is ${date}!`);
}

greet("Bredndan", new Date());
