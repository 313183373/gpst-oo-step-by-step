const Person = require('./person');

class Teacher extends Person{
    constructor(name,age,id,...classes){
        super(name,age,id);
        this.classes=classes;
    }

    introduce(){
        let message=super.introduce();
        if(this.classes.length===0){
            message+=' I am a Teacher. I teach No Class';
        }else{
            message+=` I am a Teacher. I teach ${this.classes.join(',')}.`
        }
        return message;
    }
}

module.exports =Teacher;