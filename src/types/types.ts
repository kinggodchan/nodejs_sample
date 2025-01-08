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
