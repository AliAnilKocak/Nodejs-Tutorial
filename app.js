/*
const tutorial = require('./tutorial.js');
console.log(tutorial.div(1, 5));
console.log(tutorial.sum(4,5));
console.log(new tutorial.someClass());
console.log(new tutorial.someClass().inClass(25, 5));//Export module
*/

/*

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('tutorial', (data) => {
    console.log(data.name + " " + data.surname);
});


eventEmitter.emit('tutorial', {name: "Anıl", surname: "Koçak"});


class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }

}


const anil = new Person("Anıl");

anil.on('name', ()=>{
    console.log("My Name Is "+anil.name);
});

anil.emit('name');*/

const readLine = require('readline');
const rl = readLine.createInterface({input: process.stdin, output: process.stdout});


let num = Math.floor((Math.random() * 20) + 1);
let num1 = Math.floor((Math.random() * 20) + 1);
let answer = num + num1;

rl.question(`What's ${num}+${num1}=? \n`, (userInput) => {
    if (userInput.trim() == answer) {
       rl.close();
    }else{
        rl.setPrompt('Incorrect answer Please try again. \n');
        rl.prompt(true);
        rl.on("line", (userInput)=>{
           if(userInput.trim() == answer){
               rl.close();
           }else{
               rl.setPrompt(`Your answer:  ${ answer } is incorrect. Please try again. \n`);
               rl.prompt();
           }
        });

    }
});

rl.on('close',()=>{
    console.log('correct!!');
})



