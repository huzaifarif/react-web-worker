const syncDelay = (seconds: number = 5) => {
  const start = new Date().getTime();
  const delay = seconds * 1000;
  while (true) {
      if ((new Date().getTime() - start) > delay) {
          break;
      }
  }
};

export default syncDelay;