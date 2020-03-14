import React, { useEffect, useState } from 'react';
import useWorker from 'Workers/worker.hook';

const AdderWorker: React.FC = () => {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);

  // We'll want to expose a wrapping object so we know when a calculation is in progress
  const [data, setData] = useState({
    isCalculating: false,
    total: undefined as number | undefined
  });

  // acquire our worker
  const { workerApi } = useWorker();

  useEffect(() => {
    // We're starting the calculation here
    setData({ isCalculating: true, total: undefined });

    workerApi
      .delayedAdder(number1, number2)
      .then((total: number) => setData({ isCalculating: false, total })); // We receive the result here
  }, [workerApi, setData, number1, number2]);

  return (
    <>
      <h1>Delayed Addition w/o Workers!</h1>

      <div>
        <label>Number to add: </label>
        <input
          type="number"
          onChange={e => setNumber1(parseInt(e.target.value))}
          value={number1}
        />
      </div>
      <div>
        <label>Number to add: </label>
        <input
          type="number"
          onChange={e => setNumber2(parseInt(e.target.value))}
          value={number2}
        />
      </div>
      <h2>
        Total:{" "}
        {data.isCalculating ? (
          <em>Calculating...</em>
        ) : (
          <strong>{data.total}</strong>
        )}
      </h2>
    </>
  );
};

export default AdderWorker;
