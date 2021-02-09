import mysql = require('mysql');

var connection = mysql.createConnection({
    user:'root',
    password:'mysql',
    database:'dep6_pos',
    host: 'localhost'
});

connection.connect(err=>{
    if (err){
        console.log("Failed to connect")
        throw err;
    }

    connection.query('SELECT * FROM customer', (err, result) =>{
        if (err){
            console.log("Failed to read the customers", err);
        }else{
            console.log(result);
        }
    });

    connection.query('INSERT INTO customer VALUES (?,?,?)',
        ['C016','Sathiya+', 'Moratuwa'], (err1, results) => {
       if (err1){
           console.error("Failed to insert sathiya", err);
       } else{
           console.log(results.affectedRows > 0);
       }
    });

    connection.end();

});


