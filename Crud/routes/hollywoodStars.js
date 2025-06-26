// Import the Express framework
import express from 'express';

import { index } from '../controllers/hollyStars.js'; // Import the index function for rendering stars
// Import the controller for handling Hollywood stars logic
import starsController from '../controllers/hollyStars.js';


// Create a new router instance
const hollywoodStars = express.Router();

// Route to update a star by ID
hollywoodStars.put('/:id', starsController.update);
// Route to create a new star
hollywoodStars.post('/', starsController.create);
// Route to get all stars
hollywoodStars.get('/', index);
// Route to get a single star by ID
hollywoodStars.get('/:id', starsController.getOne);
// Route to delete a star by ID
hollywoodStars.delete('/:id', starsController.delete);

// Export the router to be used in the main app
export default hollywoodStars;