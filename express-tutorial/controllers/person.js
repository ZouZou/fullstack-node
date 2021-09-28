let personModel = require('../models/person');

const getPersons = async (req, res) => {
    let persons = await personModel.find({});
    console.log(persons);

    res.status(200).json({ success: true, data: persons });
};
const createPerson = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false,  msg: 'Please provide name value' });
    }
    const newPerson = new personModel({
        id: 5,
        name: name
    });
    console.log(newPerson);
    await newPerson.save();

    res.status(201).json({ success: true, person: newPerson });
};
const updatePerson = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = await personModel.findByIdAndUpdate(id, name);
    if (!person) {
        return res.status(404).json({ success: false,  msg: `No person with id ${id}` });
    }    
    await personModel.save();
    res.status(200).json({ success: true, data: await personModel.find({}) });
};
const deletePerson = async (req, res) => {
    const person = await personModel.findByIdAndDelete(req.params.id);
    if (!person) {
        return res.status(404).json({ success: false,  msg: `No person with id ${req.params.id}` });
    }
    res.status(200).json({ success: true, data: await personModel.find({}) });
};

module.exports = { 
    getPersons, 
    createPerson, 
    updatePerson, 
    deletePerson 
};