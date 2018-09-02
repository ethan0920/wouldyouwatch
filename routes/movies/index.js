const movies = [
  {
    name: 'The Wedding Ringer',
  },
  {
    name: 'The Conjuring 2',
  },
  {
    name: 'Downsizing'
  }
]

const movieRoutes = {
  'get': (req, res) => {
    const randomMovieIndex = Math.floor(Math.random() * movies.length);
    const movieCompare = [{...movies[randomMovieIndex + 1], picks: 0}, {...movies[randomMovieIndex], picks: 0}]; // this is not a good way to do it.
    res.status(200)
      .jsonResponse({
        movies: movieCompare
      }).end();
  },
  'post': (req, res) => {
    
  }
}
module.exports = movieRoutes;
