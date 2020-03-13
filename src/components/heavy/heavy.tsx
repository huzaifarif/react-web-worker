import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import heavyBlockingLoop from './heavy-adapter';

const HeavyComponent = () => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    heavyBlockingLoop();
    setLoading(false)
  }, []);
  return (
    <div>
      {isLoading && <CircularProgress />}
      <h1>This is a heavy component doing some heavy lifting!</h1>
    </div>
  );
}

export default HeavyComponent;