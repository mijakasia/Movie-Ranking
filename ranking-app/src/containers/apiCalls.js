
export const fetchMovies = async () => {
  const response = await fetch('/movies')
  if(response.status >= 400) {
    throw(new Error('Error fetching movies'))
  } else {
    return await response.json()
  }
}

export default fetchMovies;
