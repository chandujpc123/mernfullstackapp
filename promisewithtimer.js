console.log("Welcome")
/*
function sleepFunction(callback) {
    setTimeout(()=>{
        console.log("Sleeping is Done!");
        console.log("Current time is=", new Date().toTimeString());
        callback();
    }, 5000)
}

console.log("Going to Sleep-> Current Time is:", new Date().toTimeString());
sleepFunction(display);
console.log("End");

function display(){
    console.log("Sleep function executed and this is the callback function");
}
*/

//above logic using promise

function sleepFunction(success, fail) {
    setTimeout(()=>{
        console.log("Sleeping is Done!");
        console.log("Current time is=", new Date().toTimeString());
        success();
    }, 5000)
}

console.log("Going to Sleep-> Current Time is:", new Date().toTimeString());
let sleepPromise = new Promise(sleepFunction);

sleepPromise.then(
()=>{
    console.log("Sleep function executed and this is the RESOLVED function");
},
()=>{
    console.log("Sleep function executed and this is the REJECTED function");
}
)//then closed

console.log("Bye!!")

