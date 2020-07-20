const fs = require('fs');

const chalk = require('chalk');

const yargs = require('yargs');

const notes = require('./notes.js');

// fs.writeFileSync('notes.txt', 'I am awesome');

// fs.appendFileSync('notes.txt', 'Yes I am');

// fs.appendFileSync('notes.txt', 'Yes I'm absolutely sure');

//customize yargs version
yargs.version('1.1.0');

//add notes, remove, read, list

//create add cmd
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body);
    }    
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builer: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

//create list cmd
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(){
        notes.listNotes();
    }
});

//create read cmd
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builer: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.readNote(argv.title);
    }
});


const getNotes = require('./notes');

//Parses the arguments with the requierd configure
yargs.parse();
