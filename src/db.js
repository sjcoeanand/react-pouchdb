import PouchDB from 'pouchdb';


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