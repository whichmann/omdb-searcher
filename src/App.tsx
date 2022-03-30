import "./App.css";
import { SearchBox, MovieList } from "./Components";
import { useEffect, useState } from "react";
import getMovies from "./Api/OmdbAPI";

type MovieItemModel = {
  Title: string;
  Poster: string;
  Year: string;
};

type MoviesData = {
  movies: MovieItemModel[];
  isError: boolean;
  errorMessage: string | null;
};

type OmdbResponseModel = {
  Response: "True" | "False";
  Search?: MovieItemModel[];
  Error?: string;
};

function App() {
  const [moviesData, setMoviesData] = useState<MoviesData | null>(null);
  const [searchedMovie, setSearchedMovie] = useState("");
  const fetchMovies = async (movieTitle: string) => {
    const response = await getMovies(movieTitle);
    const data: OmdbResponseModel = await response.json();
    if (response.status !== 200) {
      setMoviesData({
        movies: [],
        isError: true,
        errorMessage: data.Error ?? "Please try again",
      });
    } else {
      const newOmdbResult =
        data.Response === "True"
          ? {
              movies: data?.Search ?? [],
              isError: false,
              errorMessage: null,
            }
          : {
              movies: [],
              isError: true,
              errorMessage: data.Error ?? "Please try again",
            };
      setMoviesData(newOmdbResult);
    }
  };

  useEffect(() => {
    setMoviesData(null);
    if (searchedMovie) {
      fetchMovies(searchedMovie);
    }
  }, [searchedMovie]);

  return (
    <>
      <div className={"search-container"}>
        <SearchBox handleSearchQuery={setSearchedMovie} />
      </div>
      <div className={"list-container"}>
        {moviesData && <MovieList movieList={moviesData} />}
      </div>
    </>
  );
}

export default App;
export type { MoviesData, MovieItemModel };
