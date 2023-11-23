import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2NjM2Q5NTBjYTgwZWQ1NDg2ZjRiMjQ4ZGQ3NjdlYyIsInN1YiI6IjY1NWY0NjI5MWQzNTYzMDEzODg5M2EyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyVRCg0kFAql5qlwEryhn6DzGBM7D-KJwK25MHgGciE',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get('trending/all/day?language=en-US', options);
  return response.data;
};
