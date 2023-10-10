const APIKEY = "d86637d15f0b23dfc9cfac810b5d69e9";

const requests = {
  fetchNetflixOrigin: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchTrending: `/trending/tv/week?api_key=${APIKEY}&language=en-US`, // Assuming this is for TV shows
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28&language=en-US`, // Assuming action genre
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35&language=en-US`, // Assuming comedy genre
  fetchHorrorNow: `/discover/movie?api_key=${APIKEY}&with_genres=27&language=en-US`, // Assuming horror genre
  fetchRomanceNow: `/discover/movie?api_key=${APIKEY}&with_genres=10749&language=en-US`, // Assuming romance genre
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99&language=en-US`, // Assuming documentary genre
};


export default requests;
