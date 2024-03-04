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

/// NEW ADMIN PAGE -- starts here

myServer.get("/newadmin", function(req,res){
    console.log("Received New Admin Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./views/contact.html');
    res.sendFile(__dirname+"/views/newadminpage.html");
});

myServer.get("/cctusers", function(req,res){   
    const headersObj = {
        "x-apikey" : "657c537763ede90d96f17207"
    }
    myaxios.get("https://healthtracker-06c0.restdb.io/rest/cctusers", {
        headers: headersObj
    })
    .then(resp => {
        //console.log("response=",resp.data);
        const jsonArr = resp.data;
        //console.log("Array=",jsonArr);
        let newJSONArr = [];
        for(obj of jsonArr) {
            // iterate through the object keys and copy only required data
            let newObj = {};
            for(key in obj){
                //filter out passwords fields
                if(!(key == "password" || key == "confirmPassword")) {
                    newObj[key] = obj[key];
                }
            }
            //console.log('newObj=', newObj);
            newJSONArr.push(newObj);
         
        }
        

        res.send(newJSONArr);
    })
    .catch(err => {
        console.log("error in api call..",err);
        res.send(err);
    })
});

/*
myServer.get("/newuser", function(req,res){
    console.log("Entered Post Method");
    const userObj = {
        "username":"cctuser1",
        "email":"cctuser1@cct.com",
        "mobile":"999879789",
        "password":"test@cct",
        "confirmPassword":"test@cct"
    }

    const headersObj = {
        "x-apikey" : "657c537763ede90d96f17207",
        "Content-Type": "application/json"
    }
    myaxios.post("https://healthtracker-06c0.restdb.io/rest/cctusers", {
        headers: headersObj
    }, 
   {
    data: userObj
   }
    )
    .then(resp => {        
        const respobj = resp.data;
        console.log("respobj=",respobj);
    })
    .catch(err => {
        console.log("error in api call..",err);
        res.send(err);
    })
});
*/

myServer.get("/addnewuser", function(req,res){
    console.log("Received New Admin Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./views/contact.html');
    res.sendFile(__dirname+"/views/addnewuser.html");
});


myServer.post("/newuser", function(req,res){

    const userObj = {
        "username":"cctuser1",
        "email":"cctuser1@cct.com",
        "mobile":"999879789",
        "password":"test@cct",
        "confirmPassword":"test@cct"
    }

    var config = {
        method: 'post',
        url: 'https://healthtracker-06c0.restdb.io/rest/cctusers',
        headers: { 
          'x-apikey': '657c537763ede90d96f17207', 
          'Content-Type': 'application/json'
        },
        data : userObj
      };
      
      myaxios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        res.send(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error);
        res.send(err.toString());
      });
      

})



//Any other path other than the above routes, redirect to homepage
myServer.get("*", function(req,res){
    console.log("Received Invalid Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./views/contact.html');
    //res.send("<h1 style='color:red'>Page NOT AVAILABLE </h1>");
    //or redirect like below
    res.redirect("/");
});



