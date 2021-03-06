const router = require('express').Router();
const {createNewNote, validateNote, deleteNote} = require('../../lib/notes');
const {notes} = require('../../Develop/db/db.json');

//display the notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

//post a new note
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

//delete a note
router.delete('/notes/:id', (req, res)=> {
   deleteNote(req.params.id, notes);
  let results = notes;
  res.json(results);

});

module.exports = router;