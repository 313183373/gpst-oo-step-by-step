const Person = require('./person');
const Class = require('./class');
const Teacher = require('./teacher');

class Student extends Person {
    constructor(name, age, id, clazz) {
        super(name, age, id);
        if (clazz) {
            clazz.appendMember(this);
        }
    }

    introduce() {
        let message = super.introduce();
        if (!this.clazz) {
            message += ` I haven't been allowed to join Class.`;
        } else if (this.clazz.leader === this) {
            message += ` I am a Student. I am Leader of Class ${this.clazz.number}.`;
        } else {
            message += ` I am a Student. I am at Class ${this.clazz.number}.`
        }
        return message;
    }
}

module.exports = Student;

let c1 = new Class(1);
let t1 = new Teacher('x1', 22, 3, c1);
let s1 = new Student('xx', 12, 1, c1);
console.log(t1.introduce());
console.log(s1.introduce());
console.log(t1.isTeaching(s1));
let s2 = new Student('xxx', 13, 2);
console.log(s2.introduce());
c1.assignLeader(s1);
console.log(s1.introduce());
c1.assignLeader(s2);
console.log(s2.introduce());