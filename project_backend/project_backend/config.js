var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
});

connection.connect((err)=> {
    if (err) throw err
    console.log("connected")

});
module.exports = connection