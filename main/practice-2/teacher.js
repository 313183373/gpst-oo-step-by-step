const Person = require('./person');

class Teacher extends Person{
    constructor(name,age,...classes){
        super(name,age);
        this.classes=classes;
    }

    introduce(){
        let message=super.introduce();
        if(this.classes.length===0){
            message+=' I am a Teacher. I teach No Class.';
        }else{
            let temp=[];
            for(let i of this.classes){
                temp.push(i.number);
            }
            message+=` I am a Teacher. I teach Class ${temp.join(',')}.`
        }
        return message;
    }
}

module.exports =Teacher;