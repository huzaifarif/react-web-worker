import { wrap } from 'comlink';

const worker = new Worker('./combineWorkers', { name: 'heavy-worker', type: 'module' });
const workerApi = wrap<import('./combineWorkers').AdapterWorker>(worker);

export default workerApi;