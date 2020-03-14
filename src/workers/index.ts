import { wrap, releaseProxy } from 'comlink';

const makeWorkerApiAndCleanup = () => {
  const worker = new Worker('./combineWorkers', { name: 'heavy-worker', type: 'module' });
  const workerApi = wrap<import('./combineWorkers').AdapterWorker>(worker);
  
  // A cleanup function that releases the comlink proxy and terminates the worker
  const cleanup = () => {
    workerApi[releaseProxy]();
    worker.terminate();
  };

  return { workerApi, cleanup };
};

export default makeWorkerApiAndCleanup;