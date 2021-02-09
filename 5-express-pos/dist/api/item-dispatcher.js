"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
exports.router = express.Router();
exports.router.get('/api/v1/items', function (req, res) {
    res.send('Get all items');
});
exports.router.post('/api/v1/items', function (req, res) {
    res.send('Save a items');
});
exports.router.put('/api/v1/items', function (req, res) {
    res.send('Update a items');
});
exports.router.delete('/api/v1/items', function (req, res) {
    res.send('Delete a items');
});
//# sourceMappingURL=item-dispatcher.js.map