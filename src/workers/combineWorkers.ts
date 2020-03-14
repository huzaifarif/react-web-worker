import { expose } from 'comlink';
import heavyBlockingLoop from 'Components/heavy/heavy-adapter';
import delayedAdder from 'Components/adder/adder-adapter';

const exports = {
  heavyBlockingLoop,
  delayedAdder,
};
export type AdapterWorker = typeof exports;

expose(exports);