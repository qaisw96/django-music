import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import useApi from '../../Hooks/useApi';

const Songs = () => {
  const { fetchSongs } = useApi();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const results = await fetchSongs();
      setSongs(() => results);
    };
    getSongs();
  }, []);

  return (
    <div className='container'>
      <Title text='Songs' />
      {songs.map((artist, index) => (
        <div key={artist.id}>
          <h2 className='number'>0{index + 1}</h2>
          <h3>
            <span className='property'>Title:</span> {artist.name}
          </h3>
          <h4>
            <span className='property'> Duration in minute: </span>
            {artist.duration_in_minute}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Songs;
