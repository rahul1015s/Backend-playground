const express = require('express');
const path = require('path');

// Import the custom utility to get the root directory of the project
const rootDir = require('../utils/pathUtl');

// Create a new router instance for handling contact-related routes
const contactRouter = express.Router();

// Handle GET request to '/contact-us'
// Sends the 'contact.html' file as a response to the client
contactRouter.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

module.exports = contactRouter;
