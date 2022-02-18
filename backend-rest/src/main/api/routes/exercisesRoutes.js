import express from "express";

// Import the database control methods from the exercisesController.js file.
import { createExercise, retrieveExercises, updateExerciseById, deleteExerciseById } from '../controllers/exercisesController.js';

// Instantiante a variable to store a connection to the Express router api. 
export const exerciseRouter = express.Router();


// MARK: - Express Middleware - Exercises Routes - CRUD Operations

// CREATE a new Exercise document.
exerciseRouter.post('/', createExercise);

// RETRIEVE all Exercise documents in the MongoDB collection.
exerciseRouter.get('/', retrieveExercises);

/**
 * UPDATE an Exercise document with the request body containing all five
 * properties in the Exercise data model. 
 */ 
exerciseRouter.put('/:id', updateExerciseById);

// DELETE the Exercise with the specified id.
exerciseRouter.delete('/:id', deleteExerciseById);
 
// Export the Express router.
export default { exerciseRouter };
