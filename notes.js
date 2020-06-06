const fs = require('fs');

const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title ===title);

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title;
    // });

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.green.bold("New note added"));
        saveNotes(notes);
    } else {
        console.log(chalk.red.bold("Note title taken"));
    } 
};

const removeNote = (title) => {
   const notes = loadNotes();
   const notesToKeep = notes.filter((note) => note.title !== title);

//    const notesToKeep = notes.filter(function(note){
//     return note.title !== title;
//    });

   if(notes.length > notesToKeep.length){
    console.log(chalk.green.bold('Note removed!'));
   } else{
       console.log(chalk.red.bold("No notes found"));
   }

   saveNotes(notesToKeep);
};

const listNotes = () =>{
    console.log(chalk.magenta.bold.italic("Your notes"));
    const notes = loadNotes();
    notes.forEach(note => {
       console.log(chalk.blueBright.bold(note.title)); 
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.blueBright.bold(note.title));
        console.log(chalk.yellow(note.body));
    } else {
        console.log(chalk.red.bold("No note was found"));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
   
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}