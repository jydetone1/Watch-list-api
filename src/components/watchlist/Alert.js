import React, { useEffect, useContext } from 'react';
import { WatchListContext } from '../../contexts/WatchListContext';

const Alert = () => {
  const { showAlert, alert, watchlists } = useContext(WatchListContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [watchlists]);
  return (
    <p
      className={`alert alert-${alert.type} text-center d-block m-auto col-md-4`}
    >
      {alert.message}
    </p>
  );
};

export default Alert;
