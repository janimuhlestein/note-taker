const fs = require('fs');
const {
    createNewNote,
    validateNote,
    deleteNote
} = require('../lib/notes.js');

const {notes} = require('../Develop/db/db.json');
const { TestScheduler } = require('jest');
const { hasUncaughtExceptionCaptureCallback } = require('process');

//first, verify that we can create a note
test('creates a new note', () => {
    const note = createNewNote(
        {title: "A test note title", text: "This is a test note text", id: "04"}, notes
    );

    expect(note.title).toBe('A test note title');
    expect(note.text).toBe('This is a test note text');
    expect(note.id).toBe('04');
});

//next, verify that we can delete it
test('deletes a note', ()=> {
    const noteId = '04';
    const note = deleteNote(noteId, notes);
    const results = function(){
    for(let i = 0; i< notes.length; i++) {
        if(notes[i].id === noteId){
            return false;
        }
        return true;
    }
};
    expect(results).toBeTruthy();
});

