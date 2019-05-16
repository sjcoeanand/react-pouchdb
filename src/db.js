import PouchDB from 'pouchdb';


let localdb = 'chaptersDB';

let remotedb = 'http://192.168.1.200:5984/companies_acts';

let db = new PouchDB('chaptersDB');

// PouchDB.replicate(localdb, remotedb); 
// console.log ("Database replicated successfully from client to server");
PouchDB.replicate(remotedb, localdb);
console.log("Database replicated successfully from server to client");

PouchDB.sync('remotedb', 'localdb', {
  live: true,
  retry: true
})

//Retrieving all the documents in PouchDB
db.allDocs({include_docs: true, 'endkey': '_design', 'options.inclusive_end': false }, function(err, docs) {
    if (err) {
        return console.log(err);
    } else {
        console.log("dbcon ",docs.rows);
    }
});
export default class DB{

    constructor(){
        this.db  = new PouchDB('chaptersDB');
    }

    async getAllChapters () {
        let allChapters = await this.db.allDocs({include_docs : true, 'endkey': '_design', 'options.inclusive_end': false});
        let chapters = {};
        allChapters.rows.forEach(n => chapters[n.id] = n.doc);
        return chapters;
    }

    async createChapter(chapter){
        chapter.createdAt = new Date();
        chapter.updatedAt = new Date();

        const res = await this.db.post({ ...chapter });
        return res;
    }

    

    

}