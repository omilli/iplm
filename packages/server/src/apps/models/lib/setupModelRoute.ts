import ExpressPouchDB from 'pouchdb-express-router';
import { getModelServer } from './getModelServer';
import { getDatabaseWithPath } from '@/shared/database/getDatabaseWithPath';
import e from 'express';

const modelServer = getModelServer();

/**
 * Sets up a route for PouchDB model database in the Express application.
 * This function retrieves a PouchDB instance with a configured path and
 * attaches it to the '/modeldb' route on the modelServer.
 */
export async function setupModelRoute(): Promise<e.Express> {
  const PouchDB = await getDatabaseWithPath();
  return modelServer.use('/modeldb', ExpressPouchDB(PouchDB));
}