import PouchDB from 'pouchdb';


let localdb = 'chaptersDB';

let remotedb = 'http://192.168.1.200:5984/companies_act';

let db = new PouchDB('chaptersDB');

PouchDB.replicate(localdb, remotedb); 
console.log ("Database replicated successfully from client to server");
//Replicating a local database to Remote
PouchDB.replicate(remotedb, localdb);
console.log("Database replicated successfully from server to client");

//Retrieving all the documents in PouchDB
db.allDocs({include_docs: true, attachments: true}, function(err, docs) {
    if (err) {
        return console.log(err);
    } else {
        console.log(docs.rows);
    }
});
export default class DB{

    constructor(){
        this.db  = new PouchDB('chaptersDB');
    }

    async getAllChapters () {
        let allChapters = await this.db.allDocs({include_docs : true});
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