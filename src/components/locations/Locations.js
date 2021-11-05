import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import { Search } from '../Search';

const Locations = () => {
  const [location, setlocations] = useState([]);
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState('');

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

  const onPrevious = () => {
    locationList(info.prev);
  };

  const onNext = () => {
    locationList(info.next);
  };

  useEffect(() => {
    locationList(initialUrl);
  }, [filter]);

  return (
    <div>
      <div className='container mt-5'>
        <Search filter={filter} setFilter={setFilter} />
        <div className='table-responsive'>
          <table className='table table-striped caption-top'>
            <caption>List of locations</caption>
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
                  if (filter === '') {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(filter.toLowerCase()) ||
                    value.type.toLowerCase().includes(filter.toLowerCase()) ||
                    value.dimension.toLowerCase().includes(filter.toLowerCase())
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
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
};

export default Locations;
