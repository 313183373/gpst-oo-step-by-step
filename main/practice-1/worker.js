const Person = require('./person');
class Worker extends Person{
    introduce(){
        return super.basicIntroduce()+' I am a Worker. I have a job.';
    }
};
module.exports =Worker;
