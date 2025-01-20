const express = require('express');
const router = express.Router();
const User = require('../models/getInfo'); // Import the User model

// POST request to save user information to the database
router.post('/myReq', async (req, res) => {
    try {
        const { email, description } = req.body; 
        if (!email || !description) {
            return res.status(400).json({ error: 'Email and description are required' });
          }

        const newUser = new User({   //filling my schema with the new user
            email,
            description
        });
        console.log('Received data:', email, description);
        // Save the new user document to the database
        await newUser.save();

        // Send a success response
        res.json({ message: 'Info retrieved successfully!', user: newUser });
    } catch (err) {
        // Handle errors and send a failure response
        console.error(err);
        res.status(500).json({ message: 'Error saving user information', error: err });
    }
});

// Export the router
module.exports = router;
