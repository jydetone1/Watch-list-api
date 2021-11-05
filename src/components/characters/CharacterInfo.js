import React, { useState, useEffect } from 'react';
import './CharacterInfo.scss';
import { useParams, Link } from 'react-router-dom';

const CharacterInfo = () => {
  let { id } = useParams();
  const [charInfo, setCharInfos] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((res) => setCharInfos(res))
      .catch((err) => console.log(err));
  }, [id]);

  const { image, species, gender, status, name } = charInfo;

  return (
    <div>
      <div className='container mt-4'>
        <span className='d-flex mb-4 justify-content-start'>
          <Link to='/'>Back</Link>
        </span>
        <h2 className='mb-3 text-center'>Characters Information</h2>
        <div className='card-body d-flex justify-content-center users__info'>
          <img className='img-fluid img__info' src={image} alt={name} />
          <div className='d-flex ms-4 text-start flex-column'>
            <span>
              <strong>Species:</strong> {species}
            </span>
            <span>
              <strong>Gender:</strong> {gender}
            </span>
            <span>
              <strong>Status:</strong> {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
