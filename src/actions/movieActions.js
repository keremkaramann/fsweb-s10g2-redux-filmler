export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_FAVORITE_FROM_MOVIES = "REMOVE_FAVORITE_FROM_MOVIES";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (id, movie) => {
  return { type: ADD_MOVIE, payload: { id, ...movie } };
};

export const removeFavoriteFromMovies = (movieId) => {
  return { type: REMOVE_FAVORITE_FROM_MOVIES, payload: movieId };
};
