var mysql = require('mysql');
 
var con =mysql.createConnection({
   host: "localhost",
   user: "phpmyadmin",
   password: "aluno",
   database: "mydb"
});
 
con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Canyon123' WHERE address = 'Value 345'";
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result.affectedRows + "record(s) updated")
   });
});
