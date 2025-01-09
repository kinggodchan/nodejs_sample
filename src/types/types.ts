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
    if(user.last !== undefined) {
        console.log("Your First name is" + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    }else {
    console.log("Your name is " +user.first.toLowerCase());
    }
}

printName({first: "Bob"});
//printName({first: "Bob", last: "chris"}); , last가 없는데도 ide 오류가 안타나남

//Any 타입
let object: any = {x:0};

object.foo();
object();
object.bar = 100;
object = "hello";
const n: number = object;

//union 타입
function printId(id: ID) {
    //console.log(id.toUpperCase());
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
      } else {
        // Here, id is of type 'number'
        console.log(typeof id); //number
      }
  }
  printId(10);
  printId("Hello");
  //타입 별칭으로도 Union 같이 다른 타입들도 커스텀 가능
  type ID = number | string;


  // Type Alias & Interface
  function printCoord(point:Point) {
    console.log("The coordinate's x value is" + point.x);
    console.log("The coordinate's y value is" + point.y);
  }

  function calulateDistance(point1: Point, point2: Point):number {
    const locationX = point2.x - point1.x;
    const locationY = point2.y - point1.y;
    return Math.sqrt(locationX **2 + locationY **2)
  }



  printCoord({x:100, y:100});
//해당 객체의 속성이 같다면 ,,,,하지만 파라미터가 point1,2,3 ... 255까지 늘어난다면 계속해서 중복코드가 늘어감

//사용자 정의 타입을 사용 할 수 있다.
//type Point = {
// x: number,
// y: number
//}

//함수는 변수는 예약명을 피해야 한다.



interface Point {
  x:number;
  y:number
}

// 개방 폐쇄 원칙에 유리하다라고 했기 때문에
//예시
//interface Animal {
//  name: string;
//}

//interface Bear extends Animal {
//  honey:boolean;
//}

//function getBear():Bear {
//  return {
//    name: "Grizzly",
//    honey: true,
//  };
//}

//const bear = getBear();
//console.log(bear.name) //from animal
//console.log(bear.honey)

// Type Alias의 확장 예시
//type Aniaml = {
//  name: string;
//}

//type Aniaml = {
//  honey: boolean;
//}

//function getBear():Bear {
//  return {
//    name: "Grizzly",
//    honey: true,
//  };
//}

//const bear = getBear();
//console.log(bear.name) //from animal
//console.log(bear.honey)


//인터페이스 병합의 차이점

interface Job {
  title: string;
}
interface Job { //type으로 변경하면 중복 코드 오류가 발생
  company: string;
}

const myJob: Job = {
  title: "Sw Engineer",
  company: "Tech"
};

console.log(myJob.title); 
console.log(myJob.company);

// // 타입 단언 Type Assertions
const apiResponse: any = {
   id:1,
   title: "TypeScript Begins",
   content: "This is contents of article",
   };

// //Error 지만 찾이 못하는 경우(any)
// console.log(apiResponse.like);

interface Content {
  id:number;
  title: string;
  content: string;
}

//Type aasertion using 'as' keyword
const content1 = apiResponse as Content;
//Or using <> bracket syntax
const content2 = <Content>apiResponse;

//console.log(content1.like);  //like does not exist
console.log(content2.id); //ok
console.log(content2.title); //ok