import React, { useState, useEffect } from 'react';
import PaginationBox from '../PaginationBox';
import { Search } from '../Search';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState('');

  const history = useHistory();
  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const movieCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const filterPage = (page) => {
    const pageQuery = `${initialUrl}/?page=${page}`;
    movieCharacters(pageQuery);
  };

  useEffect(() => {
    movieCharacters(initialUrl);
  }, [filter]);

  return (
    <div>
      <div className='container my-5'>
        <Search filter={filter} setFilter={setFilter} />
        <div className='row'>
          {characters
            .filter((value) => {
              if (filter === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(filter.toLowerCase()) ||
                value.species.toLowerCase().includes(filter.toLowerCase()) ||
                value.status.toLowerCase().includes(filter.toLowerCase()) ||
                value.gender.toLowerCase().includes(filter.toLowerCase())
              ) {
                return value;
              }
              return false;
            })
            .map((item) => (
              <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 mt-4'>
                <div className='card'>
                  <img src={item.image} alt={item.name} />
                  <div className='card-body'>
                    <p className='card-title text-center'>{item.name}</p>
                    <span
                      className='d-flex justify-content-center'
                      onClick={() => history.push(`/characters/${item.id}`)}
                    >
                      <Button variant='success'>More Info</Button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <PaginationBox info={info} filterPage={filterPage} />
      </div>
    </div>
  );
};

export default Characters;
