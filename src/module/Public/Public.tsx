import * as React from 'react';
import Test from './Test';

const Public = () => {
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    const changeStatus = () => {
      setStatus(true);
    };

    changeStatus();
  }, []);

  React.useEffect(() => {
    setStatus(true);

    return () => {
      setStatus(false);
    };
  }, []);

  const handleChangeStatus = () => {
    setStatus(prevStatus => {
      return !prevStatus;
    });
  };

  return (
    <div>
      <h1>Public</h1>
      {status ? 'im true' : 'im false'}
      <button onClick={handleChangeStatus}>Change status</button>

      <Test status={status} />
    </div>
  );
};

export default Public;
