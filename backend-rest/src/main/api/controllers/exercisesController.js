import mongoose from 'mongoose';
import { Exercise } from '../models/exerciseModel.js';

// @desc    CREATE an Exercise document.
// @route   POST /exercises
// @access  Private
export const createExercise = async (req, res, next) => {
    try {
        // Create a new exercise.
        const newExercise = await Exercise.create({ 
            name: req.body.name, 
            reps: req.body.reps, 
            weight: req.body.weight, 
            unit: req.body.unit, 
            date: req.body.date 
        });
      
        // save the exercise 
        newExercise.save();
      
        // Respond back with JSON data.
        await res.status(201).json({ 
            message: 'Exercise created.', 
            data: newExercise 
        });
    } catch (err) {
        // Respond back with JSON data.
        res.status(400).json({ Error: 'Request failed.' });
        next(err)
        console.error(err);
    }
};

// @desc    READ/RETRIEVE an Exercise document.
// @route   GET /exercises
// @access  Private
export const retrieveExercises = async (req, res, next) => {
	try {
        // Retrieve all exercises from database.
	    const exercises = await Exercise.find({});

	    // Respond back with JSON data.
	    await res.status(200).json({
            message: 'Exercises retrieved.',
            data: exercises
        });
    } catch (err) {
        // Respond back with JSON data.
        res.status(500).json({ Error: 'Request failed.' });
        next(err)
        console.error(err);
    }
};

// @desc    UPDATE an Exercise document.
// @route   PUT /exercises/:id
// @access  Private
export const updateExerciseById = async (req, res, next) => {
    try {
        // Attempt to find the Exercise document to be updated.
        const exercise = await Exercise.findById(req.params.id)
        
        if (!exercise) {
            res.status(400)
            throw new Error('Exercise not found.');
        }
        
        const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body);

        // Send response.
        await res.status(200).json({ 
            message: 'Exercise updated.', 
            data: updatedExercise
        });
    } catch (err) {
        // Send response.
        res.status(500).json({ Error: 'Request failed.' });
        next(err)
        console.error(err);
    }
};

// @desc    DELETE an Exercise document.
// @route   DELETE /exercises/:id
// @access  Private
export const deleteExerciseById = async (req, res, next) => {
	try {
        // Attempt to find and delete the Exercise with the given id.
        const exercise = await Exercise.findByIdAndDelete(req.params.id);
    
        // Send response.
        await res.status(200).json({
            message: 'Exercise deleted.',
            data: exercise
        });
    } catch (err) {
        // Send response.
        res.status(500).json({ Error: 'Request failed.' });
        next(err)
        console.error(err);
    }
};

// Export the CRUD functions to be used in other modules.
export default { createExercise, retrieveExercises, updateExerciseById, deleteExerciseById };
