//the primitivies
//원시타입
const str : string= "Hello"; // string -문자열, ""로 감싸서 표현
const num :number= 10; //number - 숫자(int,float, double등 세부 타입은 없음음)
const bool :boolean= true; //boolean - 거짓과 참을 나타내는 논리형(true, false)

console.log(str.length); //5
console.log(str.toUpperCase()); //HELLO

//String, Number, Boolean 는 타입 명시법과 다르니 주의
const wrapperStr = new String(num);



