const express = require('express');
const https = require('https');
const selfsigned = require('selfsigned');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Secure World!');
});

// Define a route for your API
app.get('/ServiClean/precios', (req, res) => {
  res.json({ message: 'Prueba 1234' });
});



// Generate self-signed SSL certificate
const pems = selfsigned.generate(null, { days: 365 });

// Create HTTPS server
https.createServer({ key: pems.private, cert: pems.cert }, app).listen(port, () => {
  console.log(`Secure server is running on https://localhost:${port}`);
});
