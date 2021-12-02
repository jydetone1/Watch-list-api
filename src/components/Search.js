import React from 'react';
import './Search.scss';

export const Search = ({ setSearch }) => {
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='card w-75 shadow d-block mx-auto py-3 mb-5 bg-dark'>
      <div className='card-body'>
        <h5 className='card-title text-white'>Search For People</h5>
        <form>
          <input
            className='form-control'
            type='text'
            placeholder='Search...'
            aria-label='Search'
            onChange={handleInput}
          />
        </form>
      </div>
    </div>
  );
};
