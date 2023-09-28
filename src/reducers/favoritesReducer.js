import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";
import { REMOVE_FAVORITE_FROM_MOVIES } from "../actions/movieActions";
const favoritesInitialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    case REMOVE_FAVORITE_FROM_MOVIES:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};
export default favoritesReducer;
