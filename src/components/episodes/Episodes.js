import React, { useState, useEffect } from 'react';
import PaginationBox from '../PaginationBox';
import { Search } from '../Search';

function Episodes() {
  const [episode, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');

  const initialUrl = 'https://rickandmortyapi.com/api/episode';

  const episodeList = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const filterPage = (page) => {
    const pageQuery = `${initialUrl}/?page=${page}`;
    episodeList(pageQuery);
  };

  useEffect(() => {
    episodeList(initialUrl);
  }, [search]);

  return (
    <div>
      <div className='my-5'>
        <Search setSearch={setSearch} />
        <div className='table-responsive'>
          <table className='table table-striped caption-top'>
            <caption className='text-center mt-2'>List of episodes</caption>
            <thead className='table-dark'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Air_Date</th>
                <th scope='col'>Episode</th>
              </tr>
            </thead>
            <tbody>
              {episode
                .filter((value) => {
                  if (Search === '') {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(search.toLowerCase()) ||
                    value.episode.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                  return false;
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.air_date}</td>
                    <td>{item.episode}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <PaginationBox info={info} filterPage={filterPage} />
      </div>
    </div>
  );
}

export default Episodes;
