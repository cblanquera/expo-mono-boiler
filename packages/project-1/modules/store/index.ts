import type Engine from '@stackpress/inquire/dist/Engine';
const mode = process.env.NODE_ENV || 'development';

let cache: Engine | null = null;

export type EngineExport = {
  default: () => Promise<Engine>;
};

export default async function make() {
  if (cache) {
    return cache;
  }
  const store = mode === 'production' 
    ? require('./production') as EngineExport
    : mode === 'test'
    ? require('./integration') as EngineExport
    : require('./development') as EngineExport;
  cache = await store.default();
  return cache;
};