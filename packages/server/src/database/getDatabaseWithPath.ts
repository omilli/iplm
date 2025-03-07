import path from "path";
import fs from "fs";
import PouchDB from "pouchdb";
import { PouchDBStatic } from "./types";

const DB_DIR = path.resolve(process.cwd(), 'iplmdb');

let pathDB: PouchDBStatic<{}>;

export async function getDatabaseWithPath<T extends {}>(): Promise<PouchDBStatic<T>> {
  pathDB ??= PouchDB.defaults({
    prefix: DB_DIR + '/'
  }) as PouchDBStatic<T>;

  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  return pathDB as PouchDBStatic<T>;
} 