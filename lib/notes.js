const fs = require('fs');
const { builtinModules } = require('module');
const path = require('path');

//create a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({notes : notesArray}, null, 2)
    );
    return note;
};

//validate all input
function validateNote(note) {
    if(!note.title || typeof note.title!=='string') {
        return false;
    }
    if(!note.text || typeof note.text !='string') {
        return false;
    }
    if(!note.id || typeof note.id !='string') {
        return false;
    }
    return true;
};

//allow user to delete note
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if(id === notesArray[i].id) {
            notesArray.splice(i,1);
            fs.writeFileSync(
                path.join(__dirname, '../Develop/db/db.json'),
                JSON.stringify({notes: notesArray}, null, 2)
            );
        }
    }
    return false;
   };

module.exports = {
    createNewNote,
    validateNote,
    deleteNote
};
