// Import environment variables from .env file
// i can use the import because i have set the type in package.json to module
import 'dotenv/config';

// Import the router for Hollywood stars
import hollywoodStars from './routes/hollywoodStars.js'; 

import { fileURLToPath } from 'url';

// Import the Express framework
import express from 'express';

import bodyparser from 'body-parser'; // Import body-parser middleware for parsing request bodies
import path from 'path';

// Create an instance of the Express application
const app = express(); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs'); // Set EJS as the view engine for rendering templates
app.set('views', path.join(__dirname, 'views')); // Set the directory for EJS templates
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies
app.use(bodyparser.json()); // Middleware to parse JSON request bodies
app.use(bodyparser.urlencoded({ extended: true })); // Middleware to parse URL-encoded request

app.use('/hollywoodStars', hollywoodStars); // Use the stars router for handling requests to /stars

try {
    // Set the port from environment variable or use 3000 as default
    const PORT = process.env.PORT || 3000;
    // Start the server and listen on the specified port
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

// Handle any errors that occur during server startup
}catch (error) {
  console.error('Error starting the server:', error);
}