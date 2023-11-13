const express = require('express');
const router = express.Router();
const League = require('../models/league')

router.post('/', async (req, res) => {
    try {
        const newLeagueData = req.body;
        const newLeague = new League(newLeagueData);
        const savedLeague = await newLeague.save();
        res.status(201).json(savedLeague);
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const table = await League.find();
        res.json(table);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router