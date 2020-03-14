import syncDelay from 'Utils/syncDelay';

const heavyBlockingLoop = () => {
  console.log('Start our long running job...');
  syncDelay();
  console.log('Finished our long running job');
}

export default heavyBlockingLoop;