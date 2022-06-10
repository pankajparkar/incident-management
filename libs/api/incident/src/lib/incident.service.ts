import { Injectable } from '@nestjs/common';
import * as PouchDB from 'pouchdb';

// TODO: move it to environment file
const environment = {
    API_URL: 'http://admin:1234@localhost:5984',
    DB_NAME: 'incident',
};

const db = new PouchDB(`${environment.API_URL}/${environment.DB_NAME}`);

@Injectable()
export class IncidentService {
    async getData(limit: number, page: number): Promise<any> {
        const docs = await db.allDocs({
            limit,
            skip: (page - 1) * limit,
        });
        return docs;
    }
}
