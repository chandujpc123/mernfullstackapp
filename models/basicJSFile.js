let fs = require('fs')

function readAGivenFile(fileName){   
    try{
        let fileData = fs.readFileSync(fileName);
        return fileData.toString();
    }catch(e){
        //console.log("Error while reading the file=",e);
        //return e.message;
        return "We have encountered an error while reading your file. Please check if you've passed the right file path/name";
    };
    
}

let fileData = readAGivenFile('hellodd.txt')
console.log('file data received=',fileData);
