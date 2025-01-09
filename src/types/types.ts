//the primitivies
//원시타입
const str : string= "Hello"; // string -문자열, ""로 감싸서 표현
const num :number= 10; //number - 숫자(int,float, double등 세부 타입은 없음음)
const bool :boolean= true; //boolean - 거짓과 참을 나타내는 논리형(true, false)

console.log(str.length); //5
console.log(str.toUpperCase()); //HELLO

//String, Number, Boolean 는 타입 명시법과 다르니 주의
const wrapperStr = new String(num);


//Array
//----배열의 초기화 방법
let arrayOfNumbers1:number[];
arrayOfNumbers1 =[5];
arrayOfNumbers1 =[5,10,30];
//[5], [5,5,10,30] xxx
//[5,10,30] 덮여진다.

console.log(arrayOfNumbers1[0]); //5
console.log(arrayOfNumbers1[1]); //10
console.log(arrayOfNumbers1[2]); //30


let arrayOfNumbers2: Array<number>;
arrayOfNumbers2 = [6];
arrayOfNumbers2 = [6,8,20];
console.log(arrayOfNumbers2[2]); //20

// 해당 타입 요소만 허용되는 배열 =튜플이므로 선언 주의 
//let singleNumberTuple: [number];
//singleNumberTuple = [5];


//함수의 명시적 타입 지정 방법(매개변수 / Parameter)
function greeter(name:string) {
    return "Hello," + name;
}
console.log(greeter("Tom"));


// 객체 타입
const car = {
    color: 'red',
    model :'Sedan',
    manufacturer : 'Tpypta',
}

// 구분자를, 또는 ; 로 사용 할 수 있음
console.log(car.color);

function printOutput(pt: {x: number, y:number}) {
    console.log("The X value is :" +pt.x);
    console.log("The Y value is :" +pt.y);
}

//객체의 선택적 속성 지정 방법
function printName(user: { first: string, last?:string}) {
    if(user.last! == undefined) {
        console.log("Your First name is" + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    }else {
    console.log("Your name is " +user.first.toLowerCase());
    }
}

printName({first: "Bob", last: "chris"});