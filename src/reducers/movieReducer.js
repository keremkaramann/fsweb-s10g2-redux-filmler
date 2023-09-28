import {
  ADD_MOVIE,
  DELETE_MOVIE,
  REMOVE_FAVORITE_FROM_MOVIES,
} from "../actions/movieActions.js";
import movies from "../data.js";

const movieInitialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const movieReducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case REMOVE_FAVORITE_FROM_MOVIES:
      const updatedMovies = state.movies.filter(
        (item) => action.payload !== item.id
      );
      return {
        ...state,
        movies: updatedMovies,
      };
    default:
      return state;
  }
};

export default movieReducer;
