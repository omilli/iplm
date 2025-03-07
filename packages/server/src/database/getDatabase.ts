import { getDatabaseWithPath } from "./getDatabaseWithPath";
import type { PouchDBDatabaseGetArgs, PouchDBInitSchema } from "./types";

export async function getDatabase<T extends {}>({
  name,
  shouldInit
}: PouchDBDatabaseGetArgs): Promise<PouchDB.Database<T>> {
  const PouchDBWithPath = await getDatabaseWithPath<T>();
  const db = new PouchDBWithPath(name) as PouchDB.Database<T>;

  if (await databaseExists(db)) {
    return db
  };

  if (shouldInit) {
    return await initializeDatabase(db);
  }

  return db;
}

async function databaseExists<T extends {}>(db: PouchDB.Database<T>): Promise<boolean> {
  try {
    const init = await db.get('init');
    return typeof init !== 'undefined';
  } catch (err) {
    return false;
  }
}

async function initializeDatabase<T extends {}>(db: PouchDB.Database<T>): Promise<PouchDB.Database<T>> {
  try {
    const data = {
      _id: 'init',
      created_at: new Date().toISOString()
    } as PouchDBInitSchema<T>;

    await db.put(data);
  } catch (error) {
    const pouchError = error as PouchDB.Core.Error

    if (pouchError.name !== 'conflict') {
      throw new Error('Error initializing database');
    }
  }

  return db;
}