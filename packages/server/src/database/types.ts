export type PouchDBInitSchema<T extends {}> = T & {
  _id: string;
  created_at: string
}

export type PouchDBDatabaseGetArgs = {
  name: string, // Database name
  shouldInit?: boolean // Initialize database if not found
}

export type PouchDBStatic<T extends {}> = PouchDB.Static<T>