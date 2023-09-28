import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { removeFavorite } from "../actions/favoritesActions";
const FavoriteMovieList = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites_reducer.favorites);

  const toggleShow = useSelector(
    (store) => store.favorites_reducer.displayFavorites
  );
  const removeFav = (id) => {
    dispatch(removeFavorite(id));
    push("/movies");
  };
  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold">Favori Filmler</h5>
      {toggleShow && (
        <div className="pt-3 text-sm">
          {favorites.map((movie) => (
            <Link
              key={movie.id}
              className="py-1 flex gap-2 justify-between"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span
                className="material-icons hover:text-red-600 text-[18px]"
                onClick={() => removeFav(movie.id)}
              >
                remove_circle
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMovieList;
