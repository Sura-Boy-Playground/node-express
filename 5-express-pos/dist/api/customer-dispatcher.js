"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
exports.router = express.Router();
exports.router.get('/api/v1/customers', function (req, res) {
    res.send('Get all customers');
});
exports.router.post('/api/v1/customers', function (req, res) {
    res.send('Save a customer');
});
exports.router.put('/api/v1/customers', function (req, res) {
    res.send('Update a customer');
});
exports.router.delete('/api/v1/customers', function (req, res) {
    res.send('Delete a customer');
});
//# sourceMappingURL=customer-dispatcher.js.map