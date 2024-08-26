const express = require('express');
const router = express.Router();
const Contact = require('../models/contactform');

// Route to get all contact form submissions
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to submit a new contact form
router.post('/', async (req, res) => {
    const contact = new Contact({
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city,
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Optional: Route to get a specific contact form submission by ID
router.get('/:id', getContact, (req, res) => {
    res.json(res.contact);
});

// Middleware to get a contact form submission by ID
async function getContact(req, res, next) {
    let contact;
    try {
        contact = await Contact.findById(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Cannot find contact' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.contact = contact;
    next();
}

module.exports = router;
