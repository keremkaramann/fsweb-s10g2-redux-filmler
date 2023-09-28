import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import movieReducer from "./movieReducer";

const reducers = combineReducers({
  favorites_reducer: favoritesReducer,
  movies_reducer: movieReducer,
});

export default reducers;
