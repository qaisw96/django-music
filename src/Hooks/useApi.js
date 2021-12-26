import axios from 'axios';

const useApi = () => {
  const Api = {
    albums: '/api/albums',
    artists: '/api/artists',
    songs: '/api/songs',
  };

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  const fetchAlbums = async () => {
    const results = await axiosInstance(Api.albums);
    return results.data;
  };
  const fetchArtists = async () => {
    const results = await axiosInstance(Api.artists);
    return results.data;
  };
  const fetchSongs = async () => {
    const results = await axiosInstance(Api.songs);
    return results.data;
  };

  return {
    Api,
    axiosInstance,
    fetchAlbums,
    fetchArtists,
    fetchSongs,
  };
};

export default useApi;
