var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class 이용
var Robot = /** @class */ (function () {
    //Constructor(생성자)
    //생성자는 필수적인 요소이다.
    //this는 robot이다
    function Robot(name, model) {
        this.status = "Active"; // 기본값 Default 값을 설정할 수 있다.
        this.name = name;
        this.model = model;
    }
    //Getter for name
    Robot.prototype.getName = function () {
        return this.name;
    };
    Robot.prototype.getModel = function () {
        return this.model;
    };
    Robot.prototype.getStatus = function () {
        return this.status;
    };
    //Method(행동)
    Robot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    Robot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "'s status is now ").concat(this.status, "."));
    };
    ;
    return Robot;
}());
// Create Instance of the Robot class;
//생성자를 통해서 계속해서 생겨서 가독성이 좋아진다.
var r1 = new Robot("R2-k1", "glalxy");
var r2 = new Robot("R2-k2", "sam sung");
var r3 = new Robot("R2-k3", "lg");
//Accessing fields and Calling methods
console.log(r1.getName);
console.log(r2.getModel);
console.log(r3.getStatus);
r1.performTask("Charging");
r1.performTask("Explorering");
r1.updateStatus("On Repair");
//No-args Constructor
var Pet = /** @class */ (function () {
    function Pet() {
        this.category = "Cat";
        this.name = "Chu";
        //기본 생성자
        //작성 안해도 52번이 있다.
        //constructor() {}
    }
    return Pet;
}());
var p1 = new Pet();
console.log(p1.name);
var User = /** @class */ (function () {
    //[생성자 부분]
    function User(username, email) {
        this.job = "Student"; //기본값을 주는 경우
        this.username = username; //매개변수로 초기화
        this.email = email;
    }
    //[매서드 부분]
    User.prototype.study = function () {
        console.log("".concat(this.username, " is studying."));
    };
    return User;
}());
//[객체 생성] (new 키워드와 arguments 입력)
var user1 = new User("홍길도", "hong@aabc.co.kr");
var user2 = new User("서길도", "king@dong.com");
//[객체의 사용, 접근] (. 도트연산자 사용)
//1. 인스턴스 자체 적브
console.log(user1); // 출력 :User {username:'홍길동', email:'....'}
//2. 인스턴스의 세부 필드 접근
console.log(user2.username); //출력: 김철수
//3.메서드 호출
user1.study();
user2.study();
//클래스의 상속
var CleaningRobot = /** @class */ (function (_super) {
    __extends(CleaningRobot, _super);
    // Constructor(생성자)
    //super로 부모가 가지고 있는 필드를 넘겨줄떄 사용한다.
    function CleaningRobot(name, model, cleaningSchedule) {
        var _this = _super.call(this, name, model) || this;
        _this.cleaningSchedule = cleaningSchedule;
        return _this;
    }
    // Method(행동)  //overrid는 재정의, 오버로드는 전혀 다른 메서드가 나타나는것
    // override performTask() {
    CleaningRobot.prototype.performTask = function () {
        console.log("".concat(this.getName, " is cleaning according to the schedule: ").concat(this.cleaningSchedule.join(", "), "."));
    };
    return CleaningRobot;
}(Robot));
var CookingRobot = /** @class */ (function () {
    // Constructor(생성자)
    function CookingRobot(name, model, availableMenus) {
        this.status = "Active";
        this.name = name;
        this.model = model;
        this.availableMenus = availableMenus;
    }
    // Method(행동)
    CookingRobot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    CookingRobot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "'s status is now ").concat(this.status, "."));
    };
    CookingRobot.prototype.performCooking = function () {
        console.log("".concat(this.name, " is cooking according the menus: ").concat(this.availableMenus.join(", "), "."));
    };
    return CookingRobot;
}());
//접근 제어자 Visibility modifier / Access Modifier
//public - protected -  private
//(default), 생략되어있는것
//public: 모든 클래스에서 접근 가능(기본값)
//protected : 같은 클래스와 자식 클래스에서 접근 가능
//private : 해당 클래스 내에서만 접근 가능
var c1 = new CleaningRobot("ABC-1", "Prime", ["Sun", "Mon"]);
console.log(c1.cleaningSchedule);
c1.performTask();
console.log(c1.getName());
