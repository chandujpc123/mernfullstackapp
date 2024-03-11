var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'demo'
});

connection.connect();
 
connection.query('SELECT * from students', function (error, results, fields) {
  if (error) throw error;
  console.log('The query results are: ', results[0].solution);
});
 
connection.end();