const Person = require('./person');

class Teacher extends Person {
    constructor(name, age,...classes) {
        super(name, age);
        this.classes = classes;
        classes.forEach(value => {
            value.appendTeacher(this);
        });
    }

    introduce() {
        let message = super.introduce();
        if (this.classes.length === 0) {
            message += ' I am a Teacher. I teach No Class.';
        } else {
            let temp = [];
            this.classes.forEach((value, index, arr) => {
                temp.push(value.number);
            });
            message += ` I am a Teacher. I teach Class ${temp.join(',')}.`
        }
        return message;
    }

    isTeaching(student) {
        return this.classes.some(value => value.hasStudent(student));
    }

    welcomeNewStudent(student) {
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.clazz.number}.`);
    }

    welcomeNewLeader(student) {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.clazz.number}.`);
    }

}

module.exports = Teacher;