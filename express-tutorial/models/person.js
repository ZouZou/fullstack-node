const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    id: {
        type: Number,
        default: 0,
        required: true,
        validate(value) {
            if (value < 0) throw new Error("Negative ids aren't real.");
        },
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }    
}, { collection: 'person' });

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
