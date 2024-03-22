const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'demo_db';
const collName = 'demousers';
const trainingCollName = "trainings";
const client = new MongoClient(url);

// Database Name

async function getDBCollection() {
    await client.connect();  
    //console.log('Connected successfully to Mongo Server..');
    const db = client.db(dbName);
    //console.log('Connected successfully to the database')
    const collection = db.collection(collName);
    //console.log('connected successfully to the collection')

    return collection;

} 


async function getDBTrainingCollection() {
  await client.connect();  
  //console.log('Connected successfully to Mongo Server..');
  const db = client.db(dbName);
  //console.log('Connected successfully to the database')
  const collection = db.collection(trainingCollName);
  //console.log('connected successfully to the collection')

  return collection;

} 

function test_mongo_connection() {
  // Use connect method to connect to the server
  client.connect();  
  console.log('Connected successfully to Mongo Server..');
  const db = client.db(dbName);
  console.log('Connected successfully to the database')
  const collection = db.collection('demousers');
  console.log('connected successfully to the collection')
return 'done';
}

//test the mongodb connection
//test_mongo_connection();

function test_insertDoc() {
    let userDoc = {
        "_id":"chandu2@cct.com",
        "first_name":"chandu2",
        "last_name":"j2",
        "addr":"hyd"
    }

    // Use connect method to connect to the server
  client.connect();  
  console.log('Connected successfully to Mongo Server..');
  const db = client.db(dbName);
  console.log('Connected successfully to the database')
  const collection = db.collection('demousers');
  console.log('connected successfully to the collection')
  let insertedDoc = collection.insertOne(userDoc);
  console.log('Inserted Doc successfully to the collection')
  return insertedDoc;
}

//test inserting the doc
//let retDoc = test_insertDoc();
//console.log("Inserted record =", retDoc);

async function get_all_docs_from_collection() {
    // Use connect method to connect to the server
    client.connect();  
    console.log('Connected successfully to Mongo Server..');
    const db = client.db(dbName);
    console.log('Connected successfully to the database')
    const collection = db.collection('demousers');
    console.log('connected successfully to the collection')
    let allDocs = await collection.find({}).toArray();
    console.log("Fetched All Docs from collection=",allDocs)
  }

  //get_all_docs_from_collection();

//simplified data insertion
async function insertADoc(doc) {   
  const collection = await getDBCollection();
  console.log('connected successfully to the collection')
  try{
    let insertedDoc = await collection.insertOne(doc);
    console.log('Inserted Doc successfully to the collection')
    return insertedDoc;
  }
  catch(err){
    console.log("Error=",err.message);
    return "Insertion not performed!"
  }
  
}


  //simplified format to get all data from collection
  async function getAllDocsFromCollection(){
    const collection = await getDBCollection();
    let allDocs = await collection.find({}).toArray();
    console.log("Fetched All Docs from collection=",allDocs)
    return allDocs;
  }

  async function getAllDocsFromTrainingCollection(){
    const collection = await getDBTrainingCollection();
    let allDocs = await collection.find({}).toArray();
    console.log("Fetched All Training Docs from collection=",allDocs)
    return allDocs;
  }

/*
  let newDoc = {
    "_id":"chandu5@cct.com",
    "first_name":"chandu5",
    "last_name":"j5",
    "addr":"hydknr"
  }

  try{
    let returnObj = insertADoc(newDoc);
    console.log("returned from insertion=",returnObj)
    //client.close();
  }catch(err){
    console.log(err.message);
  }finally{
    //client.close();
    console.log("Executed finally from insert operation")
  }
  
  try{
    getAllDocsFromCollection();
    //client.close();
  }catch(er){
    console.log("err == ",er)    
  }
  finally{
   // client.close();
   console.log("executed finally from getalldocs operation");
  }
  

  */

  //simplified data insertion
async function insertATrainingDoc(doc) {   
  const collection = await getDBTrainingCollection();
  console.log('connected successfully to the collection')
  try{
    let insertedDoc = await collection.insertOne(doc);
    console.log('Inserted Doc successfully to the collection')
    return insertedDoc;
  }
  catch(err){
    console.log("Error=",err.message);
    return "Insertion not performed!"
  }
  
}

  console.log("Done!");

module.exports = {getAllDocsFromCollection ,getAllDocsFromTrainingCollection, insertATrainingDoc}