// Controller class for managing star-related operations
class StarControllers {
    constructor(){
        // Constructor can be used for initialization if needed
    }

    // Create a new star
    async create(req, res) {
        try {
            const { name, description } = req.body; // Extract star data from request body
            // Save the new star to the database (method assumed to exist)
            const newStar = await this.saveStar({ name, description });
            res.status(201).json(newStar); // Respond with the created star
        } catch (error) {
            res.status(500).json({ message: 'Error creating star', error }); // Handle errors
        }
    }

    // Update an existing star by ID
    async update(req, res) {
        try {
            const { id } = req.params; // Get star ID from request parameters
            const { name, description } = req.body; // Get updated data from request body
            // Update the star in the database (method assumed to exist)
            const updatedStar = await this.updateStar(id, { name, description });
            if (!updatedStar) {
                return res.status(404).json({ message: 'Star not found' }); // Star not found
            }
            res.status(200).json(updatedStar); // Respond with the updated star
        } catch (error) {
            res.status(500).json({ message: 'Error updating star', error }); // Handle errors
        }
    }

    // Delete a star by ID
    async delete(req, res) {
        try {
            const { id } = req.params; // Get star ID from request parameters
            // Delete the star from the database (method assumed to exist)
            await this.deleteStar(id);
            res.status(204).send(); // Respond with no content
        } catch (error) {
            res.status(500).json({ message: 'Error deleting star', error }); // Handle errors
        }
    }

    // Get all stars
    async getAll(req, res) {
        try {
            // Retrieve all stars from the database (method assumed to exist)
            const stars = await this.getAllStars();
            res.status(200).json(stars); // Respond with the list of stars
        } catch (error) {
            res.status(500).json({ message: 'Error fetching stars', error }); // Handle errors
        }
    }

    // Get a single star by ID
    async getOne(req, res) {
        try {
            const { id } = req.params; // Get star ID from request parameters
            // Retrieve the star by ID from the database (method assumed to exist)
            const star = await this.getStarById(id);
            if (!star) {
                return res.status(404).json({ message: 'Star not found' }); // Star not found
            }
            res.status(200).json(star); // Respond with the found star
        } catch (error) {
            res.status(500).json({ message: 'Error fetching star', error }); // Handle errors
        }
    }
}

// Export an instance of the StarControllers class
export default new StarControllers();