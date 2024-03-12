var myexpress = require('express')
var myaxios = require('axios')
var mycors = require('cors')
//var myutil = require('./models/utilities.js')
var myDbUtil = require('./models/LocalMongoDB')
var mySqlUtil = require('./models/LocalMySQL2')
require('dotenv').config();

const myServer = myexpress();
console.log("Port read from env variable=", process.env.NODE_PORT);
const port = process.env.NODE_PORT;
/*
myServer.listen(port, function(){
    console.log("My Express Server is started on 8000");
});
*/
//use the json methods in express to consider hearing to the json body or data in req


myServer.use(mycors())
myServer.use(myexpress.json());
myServer.use(myexpress.static('public'))

myServer.listen(port, ()=>{
    console.log("My Express Server is started on "+port);
});

myServer.get("/", function(req,res){
    console.log("Received Home Page request");
    //res.send("<body bgcolor='lightblue'><h1>Welcome to Node JS Web World!!!!!!!!!!</h1> <h1>This is our first Web Server</h1></body>");
    res.sendFile(__dirname+"/views/welcome.html");
});


myServer.get("/cctusers", async (req,res)=>{   
  try{
    let resArr = await myDbUtil.getAllDocsFromCollection();
   console.log("console.log MONGODB response in api = ",resArr);
   res.status(200);
   res.send(JSON.stringify(resArr));
  }catch(err){
    res.status(500);
    res.send(err.message)
  }
   
});

myServer.get("/getstudents", async (req,res)=>{   
    try{
      let resArr = await mySqlUtil.getAllStudentsRecords();
     console.log("console.log MySQL response in api = ",resArr);
     res.status(200);
     res.send(JSON.stringify(resArr));
    }catch(err){
      res.status(500);
      res.send(err.message)
    }
     
  });





