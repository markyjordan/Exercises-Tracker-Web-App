import mongoose from 'mongoose';

/**
 * Create a scheme for the exercise model.
 * All properties are required.
 * The 'date' property is formatted 'MM-DD-YY' (e.g. 03-13-22).
 */ 
 const exerciseSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	},
	reps: { 
		type: Number, 
		required: true 
	},
	weight: { 
		type: Number, 
		required: true 
	},
	unit: { 
		type: String, 
		required: true 
	},
	date: { 
		type: String, 
		required: true 
	},
});

// Compile the schema into a model
export const Exercise = mongoose.model('Exercise', exerciseSchema);

// Export the model.
export default { Exercise };
