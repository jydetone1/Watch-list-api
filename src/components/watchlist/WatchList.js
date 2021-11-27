import React, { useContext } from 'react';
import { WatchListContext } from '../../contexts/WatchListContext';
import Watch from './Watch';

const WatchList = () => {
  const { watchlists, clearWatchList } = useContext(WatchListContext);
  return (
    <div>
      {watchlists.length ? (
        <ul className='list-group'>
          {watchlists.map((watch) => {
            return <Watch watch={watch} key={watch.id} />;
          })}
          <button
            onClick={clearWatchList}
            className='btn clear__btn  mt-3 d-blocl m-auto'
          >
            Clear
          </button>
        </ul>
      ) : (
        <span className='text-white d-flex justify-content-center'>
          {' '}
          No Watch Lists
        </span>
      )}
    </div>
  );
};

export default WatchList;
