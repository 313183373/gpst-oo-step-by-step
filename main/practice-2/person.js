// Write your code here
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id=Person.idcount++;
    }

    introduce(){
        return this.age===1?`My name is ${this.name}. I am ${this.age} year old`:`My name is ${this.name}. I am ${this.age} years old.`;
    }

};

Person.idcount=1;

module.exports =Person;
