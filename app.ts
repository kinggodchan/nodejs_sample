console.log("Hello")

//변수의 타입 명시 방법법
let a:number = 10; //number
let b:string= "Hello"; // 문자열,string
let c:boolean= true; //boolean
let d:number[]= [1,2,3,4]; //array,배열
let e:Person= { name: "Tom", age: 35}; // object ,객체 

//..
interface Person{
    name:string;
    age:number;
}

a = 50;
b = "50";



//typeof는 내장함수
console.log("a=" +a, "type of" + typeof a)
console.log("b=" +b, "type of" + typeof b)
console.log("c=" +c, "type of" + typeof c)
console.log("d=" +d, "type of" + typeof d)
console.log("d[0]=" +d[0], "type of" + typeof d)
console.log("e.name=" +e.name, "e.age=" +e.age,"type of" + typeof e)


// 예시

let columnLength = 10; //길이를 number로 지정,number로 지정정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정 
//.. 개발 진행 과정
//.. 개발 진행 과정

columnLength = 30;
//.. 개발 진행 과정
//.. 개발 진행 과정

//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
let addLength = columnLength +5;
let meterLength = addLength /10;

//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
//.. 개발 진행 과정
console.log(addLength + "m")
console.log(meterLength + "m")


//-------------------
//메서드의 타입 명시 방법법(파라미터와 메서드를 명시해준다다)
function add(x:number ,y:number):number {
    return x + y;
}

const obj = { width:10, height: 15};
const area = obj.width * obj.height;