// Write your code here
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    introduce(){
        return this.age===1?`My name is ${this.name}. I am ${this.age} year old`:`My name is ${this.name}. I am ${this.age} years old.`;
    }

    basicIntroduce(){
        return this.age===1?`My name is ${this.name}. I am ${this.age} year old`:`My name is ${this.name}. I am ${this.age} years old.`;
    }
};

module.exports =Person;
