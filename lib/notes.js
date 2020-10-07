const fs = require('fs');
const { builtinModules } = require('module');
const path = require('path');

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes : notesArray}, null, 2)
    );
    return note;
};

function findByTitle(title, notesArray) {
    for (let i = 0; i<notesArray.length; i++) {
        if(notesArray[i].title.contains(title))
        return notesArray[i];
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
    if(!note.id || typeof note.id !='number') {
        return false;
    }
};

module.exports = {
    createNewNote,
    findByTitle,
    findById,
    findByText,
    validateNote
};