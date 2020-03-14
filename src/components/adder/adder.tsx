import React, { useState } from 'react';
import delayedAdder from './adder-adapter';

const Adder: React.FC = () => {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);

  const total = delayedAdder(number1, number2);

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
      <h2>Total: {total}</h2>
    </>
  );
};

export default Adder;
