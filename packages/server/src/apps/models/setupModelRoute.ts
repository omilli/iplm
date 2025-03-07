import ExpressPouchDB from 'pouchdb-express-router';
import { getModelServer } from './getModelServer';
import { getDatabaseWithPath } from '../../database/getDatabaseWithPath';
import e from 'express';

const modelServer = getModelServer();

export async function setupModelRoute(): Promise<e.Express> {
  const PouchDB = await getDatabaseWithPath();
  return modelServer.use('/modeldb', ExpressPouchDB(PouchDB));
}