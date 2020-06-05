const fs = require('fs');

const chalk = require('chalk');

const yargs = require('yargs');

// fs.writeFileSync('notes.txt', 'Aishwarya I will make it up to you');

// fs.appendFileSync('notes.txt', ' Pakka I will');

// fs.appendFileSync('notes.txt', ' I promise');

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
    handler: function(argv){
        console.log("Title : ", argv.title);
        console.log("Body : ", argv.body);
    }    
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log("Removing a note");
    }
});

//create list cmd
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log("Listing notes");
    }
});

//create read cmd
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    handler: function(){
        console.log("Reading notes");
    }
});


const getNotes = require('./notes');

//Parses the arguments with the requierd configure
yargs.parse();
