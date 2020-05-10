import { readFile } from 'fs'

export class Database<T> {
    protected filename: string;
    protected fullTextSearchFieldNames: (keyof T)[];

    constructor(filename: string, fullTextSearchFieldNames: (keyof T)[]) {
        this.filename = filename;
        this.fullTextSearchFieldNames = fullTextSearchFieldNames;
    }

    async find(query): Promise<T[]> {
        return [];
    }
}
