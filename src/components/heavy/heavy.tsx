import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeWorkerApiAndCleanup from 'Workers';

const HeavyComponent: React.FC = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { workerApi } = makeWorkerApiAndCleanup();
    setLoading(true);
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