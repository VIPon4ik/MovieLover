import axios from 'axios';
import { OPTIONS } from 'constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get('trending/all/day?language=en-US', OPTIONS);
  return response.data;
};

export const getMovieDetails = async (movieId, part = '') => {
  const response = await axios.get(`movie/${movieId}?language=en-US`, OPTIONS);
  return response.data;
}
