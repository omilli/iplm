import { getDatabaseWithPath } from "./getDatabaseWithPath";

const initKey = "init"

/**
 * Retrieves a database instance with the specified name.
 * If the database doesn't exist and `shouldInit` is true, it initializes the database.
 * 
 * @template TSchema - The type of documents stored in the database
 */
type GetDatabaseOptions = {
  name: string;
  shouldInit: boolean;
};

export async function getDatabase({
  name,
  shouldInit
}: GetDatabaseOptions): Promise<PouchDB.Database<{}>> {
  const PouchDBWithPath = await getDatabaseWithPath();
  const db = new PouchDBWithPath(name);

  // Returns the database if it already exists
  if (await databaseExists(db)) {
    return db
  };

  // Initializes the database if it doesn't exist and `shouldInit` is true
  if (shouldInit) {
    return await initializeDatabase(db);
  }

  return db;
}

/**
 * Determines if a database has been initialized by checking for the existence of an init document.
 * If the document exists and is not undefined, the database is considered to exist.
 */
async function databaseExists(db: PouchDB.Database<{}>): Promise<boolean> {
  try {
    return typeof await db.get(initKey) !== 'undefined';
  } catch (err) {
    return false;
  }
}

/**
 * Initializes a database by attempting to insert an init document into the database.
 * If the document already exists (causing a conflict), the function will console.warn.
 * For any other errors, it will throw an exception.
 */
async function initializeDatabase(db: PouchDB.Database<{}>): Promise<PouchDB.Database<{}>> {
  try {
    const data = {
      _id: initKey,
      created_at: new Date().toISOString()
    };

    await db.put(data);
  } catch (error) {
    const pouchError = error as PouchDB.Core.Error

    if (pouchError.name === 'conflict') {
      console.warn('Database already initialized, raise an issue if you see this message.');
    } else {
      throw new Error('Error initializing database');
    }
  }

  return db;
}