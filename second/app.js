const yargs = require("yargs");
const { addNote, listNotes , deleteNote , getNote , updateNote } = require("./filesys")

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
    handler(argv) {
        addNote(argv.title, argv.body);
        listNotes();
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    builder: {},
    handler() {
       console.log(listNotes()) ;
    }
})

yargs.command({
    command: 'del',
    describe: 'delete a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        deleteNote(argv.title);
    }
})

yargs.command({
    command: 'get',
    describe: 'get a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(getNote(argv.title));
    }
})

yargs.command({
    command: 'update',
    describe: 'update a note',
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
    handler(argv) {
        updateNote(argv.title, argv.body);
    }
})

yargs.parse()