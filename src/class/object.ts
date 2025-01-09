//Pure JS(Vanilia JS) : Object only -> Protype-based programing


// object
let robot = {
    name:"R2 -D2",
    model: "AstroMech",
    status: "Active",

    //Method(행동)
    performTask: function(task: string) {
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`);
    }
}


let robot2 = { // Members
    // Property(속성)
    name: "A2-A2",
    model: "Protocol",
    status: "Active",
    
    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`);
    }
}

let robot3 = { // Members
    // Property(속성)
    name: "R2-D1",
    model: "Protocol",
    status: "InActive",
    
    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`);
    }
}

//usage with "." dot operator(점을 통해서 메서드호출, 속성 사용 가능)
console.log(robot.name) //Accessing property
robot.performTask("Getting ready to move") //Calling Method



// 추가와 수정에 비효율적임