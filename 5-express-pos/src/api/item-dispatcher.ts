import express = require('express');

export const router = express.Router();

router.get('/api/v1/items', (req, res)=>{
    res.send('Get all items');
});

router.post('/api/v1/items', (req, res)=>{
    res.send('Save a items');
});

router.put('/api/v1/items', (req, res)=>{
    res.send('Update a items');
});

router.delete('/api/v1/items', (req, res)=>{
    res.send('Delete a items');
});
