import React, { useState, useEffect } from 'react';
import PaginationBox from '../PaginationBox';
import { Search } from '../Search';

const Locations = () => {
  const [location, setlocations] = useState([]);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');

  const initialUrl = 'https://rickandmortyapi.com/api/location';

  const locationList = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setlocations(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const filterPage = (page) => {
    const pageQuery = `${initialUrl}/?page=${page}`;
    locationList(pageQuery);
  };

  useEffect(() => {
    locationList(initialUrl);
  }, [search]);

  return (
    <div>
      <div className='my-5'>
        <Search setSearch={setSearch} />
        <div className='table-responsive'>
          <table className='table table-striped caption-top'>
            <caption className='text-center mt-2'>List of locations</caption>
            <thead className='table-dark'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Type</th>
                <th scope='col'>Dimension</th>
              </tr>
            </thead>
            <tbody>
              {location
                .filter((value) => {
                  if (search === '') {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(search.toLowerCase()) ||
                    value.type.toLowerCase().includes(search.toLowerCase()) ||
                    value.dimension.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                  return false;
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.dimension}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <PaginationBox info={info} filterPage={filterPage} />
      </div>
    </div>
  );
};

export default Locations;
