import express = require('express');
import mysql = require('mysql');

const app = express();

app.get('/api/v1/customers', (req, res) =>{
   const connection = mysql.createConnection({
       user: 'root',
       password:'mysql',
       host: 'localhost',
       database: 'dep6_pos'
   });
   connection.connect(err=>{
        if (err){
            res.status(500).send('Failed to establish the database connection');
        }else{
            connection.query('SELECT * FROM customer', (err, result) => {
                if (err){
                    res.status(500).send('Failed to read the customer data');
                    throw err;
                }

                res.json(result);
            })
        }

       connection.end();
   });
});

app.post('/api/v1/customers', (req, res) =>{
    res.status(201).json('Save Customer');
});

app.put('/api/v1/customers', (req, res) =>{
    res.status(204).json('Update Customer');
});

app.delete('/api/v1/customers', (req, res) =>{
    res.status(204).json('Delete Customer');
});

app.listen(5050);
