import express = require('express');

export const router = express.Router();

router.get('/api/v1/customers', (req, res)=>{
    res.send('Get all customers');
});

router.post('/api/v1/customers', (req, res)=>{
    res.send('Save a customer');
});

router.put('/api/v1/customers', (req, res)=>{
    res.send('Update a customer');
});

router.delete('/api/v1/customers', (req, res)=>{
    res.send('Delete a customer');
});
