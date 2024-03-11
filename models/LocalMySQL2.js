// Get the client
//import mysql from 'mysql2/promise';
var mysql = require('mysql2/promise')

async function testMySqlQuery() {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'demo',
    });
    
    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
        'SELECT * FROM students'
        );
    
        console.log("Query Result=",results); // results contains rows returned by server
        console.log("Query Fields=",fields); // fields contains extra meta data about results, if available
        connection.end();
    } catch (err) {
        console.log(err);
    }
}

async function insertRecord() {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'demo',
    });
    
    // A simple SELECT query
    try {

        //assume req.body = {} - parse those fields from the input body
        //hard coded presently
        let fname = "nodetest2", lname = "nodetest2J";
        let dob = "2021-01-01";
        let gen = "female";
        let studclass = 2;
        let sec = 'd';

        let insertQuery = "insert into students(first_name, last_name, dob, gender, class, section) values (" +
        "'"+ fname + "'" +"," + "'"+ lname + "'" +"," +  "'"+ dob + "'" +"," + "'"+ gen + "'" +"," + studclass +  "," + "'"+ sec + "'" +" )";
        console.log("Insertion Query = ", insertQuery);

        const [results, fields] = await connection.query(
        insertQuery
        );
    
        console.log("Query Result=",results); // results contains rows returned by server
        console.log("Query Fields=",fields); // fields contains extra meta data about results, if available
        connection.end();
    } catch (err) {
        console.log(err);
    }
}

console.log("Welcome to MySQL Node client");
//insertRecord();
//testMySqlQuery();

async function getAllStudentsRecords() {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'demo',
    });
    
    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
        'SELECT * FROM students'
        );
    
        console.log("Query Result=",results); // results contains rows returned by server
        console.log("Query Fields=",fields); // fields contains extra meta data about results, if available
        connection.end();
        return results;
    } catch (err) {
        console.log(err);
        return "Erron in MySQL Query execution = "+err.message;
    }
}

module.exports = {testMySqlQuery, getAllStudentsRecords}
