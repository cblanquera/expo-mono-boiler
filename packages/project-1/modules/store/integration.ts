import { PGlite } from '@electric-sql/pglite';
import connect from '@stackpress/inquire-pglite';

/**
 * Some database connections awaits the connection...
 * This is setup this way so it's consistent.
 */
export default async function make() {
  //this is the raw resource, anything you want
  const resource = new PGlite('../../.store/integration');
  //this maps the resource to the engine
  return connect(resource); 
}