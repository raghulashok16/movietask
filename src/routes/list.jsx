import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard";

const List = () => {
    const [movies, setMovies] = useState([
        {
            "Title": "Tom Clancy's Jack Ryan",
            "Year": "2018",
            "imdbID": "tt5057054",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWFjMzA3NmItOWViMy00YmIzLWI5ZWMtOTMzY2ExOGY4YTc4XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
        },
        {
            "Title": "Tom & Jerry",
            "Year": "2021",
            "imdbID": "tt1361336",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_SX300.jpg"
        },

    ]);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <MovieCard movies={movies} />
                </div>
            </div>
        </>
    )
};

export default List; 