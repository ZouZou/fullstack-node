let { people } = require('../data');
let personModel = require('../models/person');

const getPeople = async (req, res) => {
    let persons = await personModel.find({});
console.log(persons);
    // res.status(200).json({ success: true, data: people });
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
    await newPerson.save();

    res.status(201).json({ success: true, person: name });
};
const updatePerson = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    // const person = people.find((person) => person.id === Number(id));
    // if (!person) {
    //     return res.status(404).json({ success: false,  msg: `No person with id ${id}` });
    // }
    // const newPeople = people.map((person) => { 
    //     if (person.id === Number(id)) {
    //         person.name = name;
    //     }
    //     return person;
    // });
    // res.status(200).json({ success: true, data: newPeople });

    const person = await personModel.findByIdAndUpdate(id, name);
    if (!person) {
        return res.status(404).json({ success: false,  msg: `No person with id ${id}` });
    }    
    await personModel.save();
    res.status(200).json({ success: true, data: await personModel.find({}) });
};
const deletePerson = async (req, res) => {
    // const person = people.find((person) => person.id === Number(req.params.id));
    // if (!person) {
    //     return res.status(404).json({ success: false,  msg: `No person with id ${req.params.id}` });
    // }
    // const newPeople = people.filter((person) => { 
    //     if (person.id !== Number(req.params.id)) {
    //         return person;
    //     }
    // });
    // res.status(200).json({ success: true, data: newPeople });

    const person = await personModel.findByIdAndDelete(req.params.id);
    if (!person) {
        return res.status(404).json({ success: false,  msg: `No person with id ${req.params.id}` });
    }
    res.status(200).json({ success: true, data: await personModel.find({}) });
};

module.exports = { 
    getPeople, 
    createPerson, 
    updatePerson, 
    deletePerson 
};