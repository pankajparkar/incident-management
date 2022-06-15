import { Injectable } from '@nestjs/common';
import * as PouchDB from 'pouchdb';
import * as PouchDBFind from 'pouchdb-find';
import { v4 } from 'uuid';

PouchDB.plugin(PouchDBFind);

// TODO: move it to environment file
const environment = {
    API_URL: 'http://admin:1234@localhost:5984',
    DB_NAME: 'incident',
};

const db = new PouchDB(`${environment.API_URL}/${environment.DB_NAME}`);

@Injectable()
export class IncidentService {

    async createIndex() {
        try {
            await db.createIndex({
                index: {
                    fields: ['created'],
                    name: 'index'
                },
            });
        } catch {
            console.log('Error');
        }

    }

    async getAll(limit: number, page: number): Promise<any> {
        const docs = await db.allDocs({
            limit,
            skip: (page - 1) * limit,
        });
        return docs;
    }

    async getList(limit: number, page: number): Promise<any> {
        await this.createIndex();
        const result = await db.find({
            selector: {
                name: { $gte: null }
            },
            sort: [
                {
                    "created": "asc"
                }
            ],
            use_index: 'index',
            limit: 1,
            skip: (page - 1) * limit,
        });
        return result;
    }

    // TODO: add type model
    async create(model: any): Promise<any> {
        const _id = v4().replace('/-/gi', '');
        const doc = {
            _id,
            name: 'test',
        };
        try {
            const response = await db.put(doc);
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}
