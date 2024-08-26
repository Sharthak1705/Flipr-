const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');

router.get('/', async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.json(subscriptions);
    } catch (error) {
        res.status(500).json({ message: 'Server Error: Unable to fetch subscriptions' });
    }
});

// Add a new subscription
router.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        const existingSubscription = await Subscription.findOne({ email });
        if (existingSubscription) {
            return res.status(400).json({ message: 'This email is already subscribed' });
        }

        const newSubscription = new Subscription({ email });
        await newSubscription.save();
        res.status(201).json(newSubscription);
    } catch (error) {
        res.status(500).json({ message: 'Server Error: Unable to subscribe' });
    }
});

// Delete a subscription (Optional, for managing subscriptions)
router.delete('/:id', async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        await subscription.remove();
        res.json({ message: 'Subscription removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error: Unable to remove subscription' });
    }
});

module.exports = router;
