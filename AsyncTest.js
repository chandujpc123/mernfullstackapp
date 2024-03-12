var fs = require('fs')
let myFileData = null;

async function readAFile(fileName){
    let data = await fs.readFile(fileName, (err, data)=>{
        if(err) console.log(err);
        //return data.toString();
        console.log("File Data=\n",data.toString())
    })
    return data;
}

async function readMyFile() {
    myFileData = readAFile('./views/welcome.html')
    console.log("File Data read by program=\n",myFileData);

}
console.log("welcome");

readMyFile();


console.log("end");