import { SearchBox, MovieList } from "./Components";
import { useEffect, useState } from "react";
import getMovies from "./Api/OmdbAPI";

type MovieItemModel = {
  Title: string;
};

type OmdbResponseModel = {
  movies: MovieItemModel[];
  isError: boolean;
  errorMessage: string | null;
};

function App() {
  const [omdbResult, setOmdbResult] = useState<OmdbResponseModel | null>(null);
  const [searchedMovie, setSearchedMovie] = useState("");
  const fetchMovies = async (movieTitle: string) => {
    const response = await getMovies(movieTitle)
    const data = await response.json();
    if (data.Response === "False") {
      const newOmdbResult = {
        movies: [],
        isError: true,
        errorMessage: data.Error,
      };
      setOmdbResult(newOmdbResult);
    } else {
      const newOmdbResult = {
        movies: data.Search,
        isError: false,
        errorMessage: null,
      };
      setOmdbResult(newOmdbResult);
    }
  };

  useEffect(() => {
    setOmdbResult(null);
    if (searchedMovie) {
      fetchMovies(searchedMovie);
    }
  }, [searchedMovie]);

  return (
    <>
      <SearchBox handleSearchQuery={setSearchedMovie} />
      {omdbResult && <MovieList movieList={omdbResult} />}
    </>
  );
}

export default App;
export type { OmdbResponseModel, MovieItemModel };
