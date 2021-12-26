import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import useApi from '../../Hooks/useApi';

const Artists = () => {
  const { fetchArtists } = useApi();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const results = await fetchArtists();
      setArtists(() => results);
    };
    getArtists();
  }, []);

  return (
    <div className='container'>
      <Title text='Artists' />
      {artists.map((artist, index) => (
        <div key={artist.id}>
          <h2 className='number'>0{index + 1}</h2>
          <h3>
            <span className='property'> Name:</span> {artist.name}
          </h3>
          <h4>
            <span className='property'>Age: </span> {artist.age}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Artists;
