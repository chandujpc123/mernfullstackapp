var myexpress = require('express')
var myaxios = require('axios')

const myServer = myexpress();
const port = 8000;
/*
myServer.listen(port, function(){
    console.log("My Express Server is started on 8000");
});
*/

myServer.listen(port, ()=>{
    console.log("My Express Server is started on 8000");
});

myServer.get("/", function(req,res){
    console.log("Received Home Page request");
    res.send("<body bgcolor='lightblue'><h1>Welcome to Node JS Web World!!!!!!!!!!</h1> <h1>This is our first Web Server</h1></body>");
});

myServer.get("/contact", function(req,res){
    console.log("Received Contact Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./views/contact.html');
    res.sendFile(__dirname+"/views/contact.html");
});

myServer.get("/admin", function(req,res){
    console.log("Received Contact Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./views/contact.html');
    res.sendFile(__dirname+"/views/adminpage.html");
});

myServer.get("/test", (req,res)=>{
    console.log("Received test Page request");  
    res.send("<h1 style='color:green'>This is a test page</h1>");
});


//From this point we're starting REST API invocations..
//Using AXIOS

myServer.get("/getreqresusers", (req,res)=>{

    myaxios.get("https://reqres.in/api/users")
    .then(resp => {
        console.log("response=",resp.data);
        res.send(resp.data);
    })
    .catch(err => {
        console.log("error in api call..",err);
        res.send(err);
    })

});
//Any other path other than the above routes, redirect to homepage
myServer.get("*", function(req,res){
    console.log("Received Invalid Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./views/contact.html');
    //res.send("<h1 style='color:red'>Page NOT AVAILABLE </h1>");
    //or redirect like below
    res.redirect("/");
});



