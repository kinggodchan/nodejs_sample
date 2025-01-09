//class 이용
class Robot { //Members
    //Property 또는 Field(속성, 필드)
    name:string;
    model: string;
    status: string = "Active";

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