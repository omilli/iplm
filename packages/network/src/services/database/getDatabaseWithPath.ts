import path from "path";
import fs from "fs";
import PouchDB from "pouchdb";

// The directory where the databases are stored
const dir = path.resolve(process.cwd(), 'iplmdb');

// The PouchDB instance with the DB_DIR path prefix
let pathDB: PouchDB.Static<{}>;

/**
 * Returns a database instance configured with a specific path prefix.
 * Initializes the database directory if it doesn't exist.
 * Uses memoization to avoid recreating another instance on subsequent calls.
 */
export async function getDatabaseWithPath(): Promise<PouchDB.Static<{}>> {
  pathDB ??= PouchDB.defaults({
    prefix: `${dir}/`
  }) as PouchDB.Static<{
    prefix: string;
  }>;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return pathDB;
} 