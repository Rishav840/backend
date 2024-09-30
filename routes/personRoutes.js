const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("saved data");
        res.status(200).json(response);




    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "error" });
    }

});



router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetching");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "error" });

    }
})





router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'manager' || workType == 'owner' || workType == 'chef') {
            const response = await Person.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response);

        } else {
            res.status(500).json({ error: 'invalid work type' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });

    }

})



router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return res.status(404).json({ error: "person not founded" });
        }

        console.log('data updated');
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "error" });
    }



})



router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }

        console.log('Deleted');
        res.status(200).json({ message: "Person data deleted successfully" });

    } catch (err) {
        console.error("Error deleting person:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});



module.exports = router;