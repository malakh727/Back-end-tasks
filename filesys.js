const fs = require('fs');
const { title } = require('process');


const addNote = (title, body) => {
    const notes = listNotes();
    notes.push({
        title,
        body
    });
    saveNote(notes);
}


const listNotes = () => {
    const data = JSON.parse(fs.readFileSync("./notes.json").toString());
    return data;
    
}

const saveNote = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes));
}

const deleteNote = (title) =>{
    const data = listNotes();
    const newnotes=data.filter((notes) => notes.title!==title);
    saveNote (newnotes);
}
const getNote = (title) =>{
    const data = listNotes();
    const newnotes=data.filter((notes) => notes.title===title);
    return newnotes;
}

const updateNote = (title, body) =>{
    const data = listNotes();
    const newnotes=data.filter((notes) => notes.title===title);
    deleteNote (title);
    newnotes.title=title;
    newnotes.body=body;
    addNote(newnotes.title, newnotes.body);
}
module.exports = {
    addNote , listNotes , deleteNote , getNote, updateNote
}