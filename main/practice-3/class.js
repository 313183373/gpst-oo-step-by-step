// Write your code here
class Class {
    constructor(number) {
        this.number = number;
        this.teachers = [];
    }

    assignLeader(student) {
        if (this.hasStudent(student)) {
            this.leader = student;
            this.teachers.forEach(value => {
                if (value.isTeaching(student)) {
                    value.welcomeNewLeader(student);
                }
            })
            return 'Assign team leader successfully.';
        } else {
            return 'It is not one of us.';
        }
    }

    appendMember(student) {
        student.clazz = this;
        for (let i of this.teachers) {
            if (i.isTeaching(student)) {
                i.welcomeNewStudent(student);
            }
        }
    }

    appendTeacher(teacher) {
        this.teachers.push(teacher);
    }

    hasStudent(student) {
        return student.clazz === this;
    }
}

module.exports = Class;