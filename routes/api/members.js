const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

// Gets all members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
    if (members.some(member => member.id === parseInt(req.params.id))) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `Member with id: ${req.params.id} not found` });
    }
    // console.log(req.params);
})

//create member
router.post('/', (req, res) => {
    const newMeber = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        active: req.body.active
    }
    if (!newMeber.name || !newMeber.email) {
        return res.status(400).json({ msg: "Name and Email required" });
    }
    members.push(newMeber);
    res.json(members);
    // res.redirect('/');
})

// Update a member
router.put('/:id', (req, res) => {
    if (members.some(member => member.id === parseInt(req.params.id))) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
        const updateMember = req.body;
    } else {
        res.status(400).json({ msg: `Member with id: ${req.params.id} not found` });
    }
})

//Update a member
router.delete('/:id', (req, res) => {
    if (members.some(member => member.id === parseInt(req.params.id))) {
        // delete a member
        res.json({ msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id)) });
    } else {
        res.status(400).json({ msg: `Member with id: ${req.params.id} not found` });
    }
})

module.exports = router;