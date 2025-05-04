const express = require('express');
const path = require('path');
const rootDir = require('./utils/pathUtl');
const app = express();

// Local modules
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Use routers
app.use(homeRouter);
app.use(contactRouter);


// Handle POST from contact form
app.post('/contact-us', (req, res, next) => {
    const { name, email } = req.body;

    res.send(`
        <h1>Thanks, ${name}!</h1>
        <p>We received your email: ${email}</p>
    `);
});

// ❗ 404 handler must be at the end
app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
