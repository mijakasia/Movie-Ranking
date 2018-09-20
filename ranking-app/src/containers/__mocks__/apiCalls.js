export const fetchMovies = jest.fn()
  .mockImplementationOnce(() => ({
    movies: [
      { id: 1, data: { title: '', type: '', year: '', rating: '', user_ratings: '', description: ''}},
      { id: 2, data: { title: '', type: '', year: '', rating: '', user_ratings: '', description: ''}},
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error fetching movies'))
  })

  export default fetchMovies;
