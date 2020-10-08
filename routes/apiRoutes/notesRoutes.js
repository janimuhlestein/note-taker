const router = require('express').Router();
const {findById, createNewNote, validateNote, findByTitle, findByText} = require('../../lib/notes');
const {notes} = require('../../Develop/db/db.json');

console.log(notes);

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if(result) {
        res.json(result);
    } else{
        res.status(404).send("I'm sorry, but no note with that Id exists");
    }
});

router.get('/notes/:title', (req, res) => {
    const result = findByTitle(req.params.title, notes) 
        if(result) {
            res.json(result);
        } else {
            res.status(404).send("I'm sorry,, but no note with that title exists");
        }
});

router.get('/notes/:text', (req, res) => {
    const result = findByText(req.params.text, {notes});
    if(result) {
        res.json(result);
    } else {
        res.status(404).send("I'm sorry, but no note with that text exists.");
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    //console.log(req.body);
    if(!validateNote(req.body)) {
       res.status(404).send("The note is not properly formatted.");
    } else{
        const note = createNewNote(req.body, notes);
        res.json(note);
    } 
});

router.delete('/notes/:id', (req, res)=> {
    console.log(req.body);

});

module.exports = router;