"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var app = express();
app.get('/api/v1/customers', function (req, res) {
    var connection = mysql.createConnection({
        user: 'root',
        password: 'mysql',
        host: 'localhost',
        database: 'dep6_pos'
    });
    connection.connect(function (err) {
        if (err) {
            res.status(500).send('Failed to establish the database connection');
        }
        else {
            connection.query('SELECT * FROM customer', function (err, result) {
                if (err) {
                    res.status(500).send('Failed to read the customer data');
                    throw err;
                }
                res.json(result);
            });
        }
        connection.end();
    });
});
app.post('/api/v1/customers', function (req, res) {
    res.status(201).json('Save Customer');
});
app.put('/api/v1/customers', function (req, res) {
    res.status(204).json('Update Customer');
});
app.delete('/api/v1/customers', function (req, res) {
    res.status(204).json('Delete Customer');
});
app.listen(5050);
//# sourceMappingURL=main.js.map