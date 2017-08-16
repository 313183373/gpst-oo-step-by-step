const Person = require('./person');
const Class = require('./class');
const Teacher = require('./teacher');

class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        if (clazz) {
            clazz.appendMember(this);
        }
    }

    introduce() {
        let message = super.introduce();
        if (!this.clazz) {
            message += ` I am a Student. I haven't been allowed to join Class.`;
        } else if (this.clazz.leader === this) {
            message += ` I am a Student. I am Leader of Class ${this.clazz.number}.`;
        } else {
            message += ` I am a Student. I am at Class ${this.clazz.number}.`
        }
        return message;
    }
}

module.exports = Student;
