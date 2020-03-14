import { expose } from 'comlink';
import heavyBlockingLoop from 'Components/heavy/heavy-adapter';

const exports = {
  heavyBlockingLoop
};
export type AdapterWorker = typeof exports;

expose(exports);