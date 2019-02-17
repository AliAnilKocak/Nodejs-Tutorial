/*
const tutorial = require('./tutorial.js');
console.log(tutorial.div(1, 5));
console.log(tutorial.sum(4,5));
console.log(new tutorial.someClass());
console.log(new tutorial.someClass().inClass(25, 5));//Export module
*/

/*const EventEmitter = require('events');
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

into 

anil.emit('name');*/

/*const readLine = require('readline');
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
});*/

/*
const fs = require('fs');


fs.writeFile('data.txt','Is there any programmer nere here?.',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File Created');
        fs.readFile('data.txt','utf8',(err,data)=>{
            if (err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        });
    }
});


fs.rename('data.txt', 'data2.txt', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully file renamed');
    }
});

fs.appendFile('data2.txt','AppendFile functions is worked :) \n',err => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully appended data to file');
    }
});


fs.unlink('data2.txt',err => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully deleted the file');
    }
});


fs.mkdir('tutorial', err => {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile('tutorial/data.txt', '123', (err) => {
            if (err) {
                console.log(err);

            } else {
                console.log('Files created');
            }

        });
        console.log('Folder created');
    }
});


fs.unlink('tutorial/data.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('files deleted');
    }
});

fs.rmdir('tutorial', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder deleted');
    }
});*/

/*fs.readdir('example', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        for (let file of files) {
            fs.unlink(`example/${file}`, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`${file} is deleted`);
                }
            });
        }
    }
});*/

/*
const fs = require('fs');
const readableStream  = fs.createReadStream('example.txt','utf8');
const writeableStream = fs.createWriteStream('example2.txt');

readableStream.on('data',(chunk)=>{
    writableStream.write(chunk);
});
*/

/*
const fs = require('fs');

fs.readFile('big.txt','utf8',(err,file)=>{
    if(err){
        console.log(err);
    }
    else{

        console.log(file);
    }
});


const rs = fs.createReadStream('big.txt','utf8');

rs.on('data',(chunk)=>{
    console.log(chunk);
});*/

/*
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();  //Compress
const rs = fs.createReadStream('example.txt');
const ws = fs.createWriteStream('example.txt.gz');
rs.pipe(gzip).pipe(ws);

const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip(); //Uncompress
const rs = fs.createReadStream('example.txt.gz');
const ws = fs.createWriteStream('extractedFile.txt');
rs.pipe(gunzip ).pipe(ws);
*/

/*const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello World from Nodejs');
        res.end();
    }else {
        res.write('Wrong path.');
        res.end();
    }

});
const port = '3000';

server.listen(port);

console.log('http://localhost:'+port);*/

/*const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const readStream = fs.createReadStream('static/index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);*/



"dependencies": {

    "lodash": "^4.17.11"

    major.minor.patch

    "^4.17.11"=>major.x.x

    "~4.17.11"=>major.minor.x

}


































