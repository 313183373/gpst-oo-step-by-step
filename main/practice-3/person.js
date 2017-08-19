// Write your code here
function Person(name, age) {
    this.name=name;
    this.age=age;
    this.id=Person.prototype.ids++;
}

Person.prototype.introduce=function () {
    if(this.age===1) return `My name is ${this.name}. I am ${this.age} year old.`;
    return `My name is ${this.name}. I am ${this.age} years old.`;
};

Person.prototype.ids=1;

module.exports =Person;

