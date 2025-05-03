const express = require('express');

const app = express();

// Middleware to parse form data from POST requests (needed for req.body)
// You can add this if you want to read submitted form data
app.use(express.urlencoded({ extended: true }));

// First middleware: logs every request's URL and method
app.use((req, res, next) => {
    console.log('First DUMMY middleware', req.url, req.method);
    next(); // Pass control to the next middleware or route
});

// Second middleware: also logs every request (just to show middleware chaining)
app.use((req, res, next) => {
    console.log('Second DUMMY middleware', req.url, req.method);
    next();
});

// GET route for the homepage
app.get('/', (req, res, next) => {
    res.send(`<h1>Hello Rahul!</h1> <p>Go to /contact-us to access the form.</p>`); // Sends a simple HTML response
});

// GET route for the contact-us page that returns a form
app.get('/contact-us', (req, res, next) => {
    res.send(`
        <h1>Please give your details</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="submit" />
        </form>
    `);
});

// POST route to handle form submission
app.post('/contact-us', (req, res, next) => {
    // You could access the form data using req.body.name and req.body.email if express.urlencoded is used
    const {name, email} = req.body;  // Get form data from the request body
   res.send(`<h1>Thanks, ${name}!</h1> <p>We receive your email: ${email}</p>`);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
