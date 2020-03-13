import React, { useState, useEffect } from 'react';
import { wrap } from 'comlink';
import CircularProgress from '@material-ui/core/CircularProgress';

const HeavyComponent = () => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // Initialize the worker
    const worker = new Worker('../../workers', { name: 'heavy-worker', type: 'module' });
    const workerApi = wrap<import('../../workers').AdapterWorker>(worker);
    // Call the actual blocking method
    workerApi.heavyBlockingLoop().then(() => setLoading(false));
  }, []);
  return (
    <div>
      {isLoading && <CircularProgress />}
      <h1>This is a heavy component doing some heavy lifting!</h1>
    </div>
  );
}

export default HeavyComponent;