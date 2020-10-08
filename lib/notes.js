const fs = require('fs');
const { builtinModules } = require('module');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({notes : notesArray}, null, 2)
    );
    return note;
};

function findByTitle(title, noteArray) {
    for (let i = 0; i<noteArray.length; i++) {
        if(noteArray[i].title.contains(title))
        return noteArray[i];
    }
    return false;
};

function findById(id, notesArray) {
 for (let i = 0; i < notesArray.length; i++) {
     if(id === notesArray[i].id) {
         return notesArray[i];
     }
 }
 return false;
};

function findByText(text, notesArray) {
    for(let i = 0; i<notesArray.length; i++) {
        if(notesArray[i].text.contains(text)) {
            return notesArray[i];
        }
    }
    return false;
};

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

module.exports = {
    createNewNote,
    findByTitle,
    findById,
    findByText,
    validateNote
};