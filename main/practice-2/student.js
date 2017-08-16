const Person = require('./person');
const Class=require('./class');

class Student extends Person {
    constructor(name, age, id, clazz) {
        super(name, age, id);
        this.clazz = clazz;
    }

    introduce() {
        let message = super.introduce();
        if (this.clazz.leader === this) {
            message += ` I am a Student. I am Leader of Class ${this.clazz.number}.`;
        } else {
            message += ` I am a Student. I am at Class ${this.clazz.number}.`
        }
        return message;
    }
};
module.exports = Student;
