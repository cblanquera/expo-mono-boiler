import { Pool } from 'pg';
import pg from '@stackpress/inquire-pg';

/**
 * Some database connections awaits the connection...
 * This is setup this way so it's consistent.
 */
export default async function make() {
  //this is the raw resource, anything you want
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    application_name: "$ docs_simplecrud_project_1",
  });
  const connection = await pool.connect();
  //this maps the resource to the engine
  return pg(connection);
}