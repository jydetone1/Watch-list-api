import React, { useState, useEffect } from 'react';
import PaginationBox from '../PaginationBox';
import { Search } from '../Search';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');

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
  }, [search]);

  if (characters.length < 1) {
    return <h2 className='section-title'>no search</h2>;
  }
  return (
    <section className='character__bg'>
      <div className='container py-5'>
        <Search setSearch={setSearch} />
        <div className='row'>
          {characters
            .filter((value) => {
              if (search === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase()) ||
                value.species.toLowerCase().includes(search.toLowerCase()) ||
                value.status.toLowerCase().includes(search.toLowerCase()) ||
                value.gender.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
              return false;
            })
            .map((item) => (
              <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                <div className='card'>
                  <img src={item.image} alt={item.name} />
                  <div className='card-body'>
                    <p className='card-title'>{item.name}</p>
                    <span
                      onClick={() => history.push(`/characters/${item.id}`)}
                    >
                      <Button variant='success'>More Info</Button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          <PaginationBox info={info} filterPage={filterPage} />
        </div>
      </div>
    </section>
  );
};

export default Characters;
