const express = require('express');
const engine = require('express-handlebars').engine;

const app = express();



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tweets'
});
 
connection.connect();



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', (req, res) => {

  connection.query('SELECT * from tweets where id_a="1" ', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].nom_aut);
    res.render('home',{ title:'this is home',nom:results[0].nom});
  });
});

 

app.listen(3000);