import syncDelay from 'Utils/syncDelay';

const delayedAdder = (number1: number, number2: number) => {
  console.log('Start to add...');
  syncDelay();
  const total = number1 + number2;
  console.log('Finished adding');
  return total;
}

export default delayedAdder;