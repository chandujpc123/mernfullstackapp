let fs = require('fs')
function readFile(fileName, callme){
    //setTimeout(display(username), 2000);
   fs.readFile(fileName, (err,data)=>{
        console.log("File Data=", data.toString());
        callme();
    });
    
}

function afterDisplay(){
    console.log("Bye! The time is:"+new Date())
}

function justBye() {
    console.log('Bye for now!!!');
    
}
readFile('./models/hello.txt', afterDisplay);
//afterDisply();
readFile('./models/hello.txt', justBye);