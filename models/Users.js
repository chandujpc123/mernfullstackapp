
var myaxios = require('axios')
let users=(req,res)=>{
  const headObj={
    "x-apikey":"657c537763ede90d96f17207"
  }
  myaxios.get("https://healthtracker-06c0.restdb.io/rest/cctusers",{
    headers:headObj
  })
  .then(resp=>{
      const orgArr=resp.data;
      let dupArr=[];
      for(obj of orgArr){
        let newObj = {};
        for(key in obj){
          if(key!="password"&& key!="confirmPassword"){
            newObj[key]=obj[key]
          }
        }
        dupArr.push(newObj);
      }
      res.send(orgArr);
  })
  .catch(error=>{
    console.log("Error in api call...",error.toString());
  })
}
let singleuser=(req,res)=>{
  let id=req.params.n;
  const headObj={
    "x-apikey":"657c537763ede90d96f17207"
  }
  myaxios.get("https://healthtracker-06c0.restdb.io/rest/cctusers"+id,{
    headers:headObj
  })
  .then(resp=>{
      const orgArr=resp.data;
      let dupArr=[];
      for(obj of orgArr){
        let newObj = {};
        for(key in obj){
          if(key!="password"&& key!="confirmPassword"){
            newObj[key]=obj[key]
          }
        }
        dupArr.push(newObj);
      }
      res.send(orgArr);
  })
  .catch(error=>{
    console.log("Error in api call...",error.toString());
  })
}
let createUser=(req, res)=>{
  const userObj=req.body;
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
    console.log(response);
    res.send(JSON.stringify(response.data))
   })
   .catch(function (error) {
    console.log(error);
    res.send(error.toString());
   });
  
}
let delUser=(req,res)=>{
  console.log("request data: ",req.body)
    const axios = require('axios');
    let data =JSON.stringify(req.body) ;
    console.log("data =====",req.body.id)
    let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'https://healthtracker-06c0.restdb.io/rest/cctusers/'+req.body.id,
    headers: {
      'x-apikey': '657c537763ede90d96f17207',
      'Content-Type': 'application/json'
    },
    data : data
    };
     axios.request(config)
      .then((response) => {
      console.log(response);
      res.redirect("/");
    })
    .catch((error) => {
       console.log(error);
    });
}
let editUser=(req,res)=>{
  let data=req.body.data;
  const axios = require('axios');
 
  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: 'https://healthtracker-06c0.restdb.io/rest/cctusers/'+req.body.reqUserId,
    headers: {
      'x-apikey': '657c537763ede90d96f17207',
      'Content-Type': 'application/json'
  },
  data : data
  };
  axios.request(config)
    .then((response) => {
   // console.log(JSON.stringify(response.data));
    res.redirect("/admin");
  })
  .catch((error) => {
    console.log(error);
  });
}
module.exports={users,singleuser,createUser,delUser,editUser}