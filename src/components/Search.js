import React from 'react';
import './Search.scss';

export const Search = ({ setFilter }) => {
  const handleInput = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <form className='d-block mx-auto w-75'>
        <input
          className='form-control'
          type='text'
          placeholder='Search...'
          aria-label='Search'
          onChange={handleInput}
        />
      </form>
    </div>
  );
};
