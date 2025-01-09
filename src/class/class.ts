//class 이용
class Robot { //Members
    //Property 또는 Field(속성, 필드)
    name:string;
    model: string;
    status: string = "Active"; // 기본값 Default 값을 설정할 수 있다.

    //Constructor(생성자)
    //생성자는 필수적인 요소이다.
    //this는 robot이다
    constructor(name: string, model: string) {
        this.name = name; 
        this.model = model;
    }

    //Method(행동)
    performTask(task: string) {
        console.log(`${this.name} is performing ${task}.`);
    };


    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`);
    };
}


// Create Instance of the Robot class;
//생성자를 통해서 계속해서 생겨서 가독성이 좋아진다.
let r1 = new Robot("R2-k1","glalxy")
let r2 = new Robot("R2-k2","sam sung")
let r3 = new Robot("R2-k3","lg")

//Accessing fields and Calling methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);

r1.performTask("Charging");
r1.performTask("Explorering");
r1.updateStatus("On Repair");


//No-args Constructor
class Pet{
    category: string = "Cat";
    name: string = "Chu";

    //기본 생성자
    //작성 안해도 52번이 있다.
    //constructor() {}
}

let p1 = new Pet();
console.log(p1.name);


class User {
    //[필드 부분]
    username: string; //타입만을 표기하는 경우
    email:string;
    job:string = "Student"; //기본값을 주는 경우

    //[생성자 부분]
    constructor(username: string, email: string) {
        this. username = username; //매개변수로 초기화
        this. email = email;
    }

    //[매서드 부분]
    study(): void {
        console.log(`${this.username} is studying.`);
    }
}

//[객체 생성] (new 키워드와 arguments 입력)
let user1 = new User("홍길도", "hong@aabc.co.kr");
let user2 = new User("서길도", "king@dong.com");

//[객체의 사용, 접근] (. 도트연산자 사용)
//1. 인스턴스 자체 적브
console.log(user1) // 출력 :User {username:'홍길동', email:'....'}
//2. 인스턴스의 세부 필드 접근
console.log(user2.username); //출력: 김철수
//3.메서드 호출
user1.study();
user2.study();