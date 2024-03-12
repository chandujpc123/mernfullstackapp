var fs = require('fs')
console.log("Welcome");

//function readAFile(fileName, success, fail)
function readAFile(resolvedFn, rejectedFn){
    let data = fs.readFile('README.mds', (err, data)=>{
        //if(err) console.log(err);
        if(err) rejectedFn(err)
        //return data.toString();
        //console.log("File Data=\n",data.toString())
        else resolvedFn(data.toString());
    })
}

//normal function call
//readAFile('README.md')

let filePromise = new Promise(readAFile);

filePromise.then(
    (fileData)=>{
        console.log("Got the file content as =",fileData);
    },
    (fileErr)=>{
        console.log("Got an Error reading the file =",fileErr);
    }
)

console.log("End..");