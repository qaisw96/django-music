import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import useApi from '../../Hooks/useApi';

const Albums = () => {
  const { fetchAlbums } = useApi();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbumsData = async () => {
      const results = await fetchAlbums();
      setAlbums(() => results);
    };
    getAlbumsData();
  }, []);

  return (
    <div className='container'>
      <Title text={'Albums'} />
      {albums.map((album, index) => (
        <div key={album.id}>
          <h2 className='number'>0{index + 1}</h2>
          <h3>
            <span className='property'>Title:</span> {album.name}
          </h3>
          <h4>
            <span className='property'>Category:</span> {album.category}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Albums;
