const express = require('express');
const router = express.Router();
const Stat = require('../models/stats');

router.post('/', async (req, res) => {
    console.log('Request Body:', req.body);
    try {
        const newStatData = req.body;
        const newStat = new Stat(newStatData);
        const savedStat = await newStat.save();
        res.status(201).json(savedStat);
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const stats = await Stat.find();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const statData = req.body;
        const updatedStat = await Stat.findByIdAndUpdate(req.params.id, statData, { new: true });
        if (!updatedStat) {
            return res.status(404).json({ message: 'Stat not found' });
        }
        res.json(updatedStat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deleteStat = await Stat.findByIdAndDelete(req.params.id)
        if(!deleteStat) {
            return res.status(404).json({ message: 'Stat not found'})
        }
        res.json({ message: 'Stat Deleted Successfully'})
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
})

module.exports = router;
