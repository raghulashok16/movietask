import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard";

const List = () => {
    const [movies, setMovies] = useState([]);
    const apiCall = async (searchText) => {
        const url = `http://www.omdbapi.com/?s=${searchText}apikey=722ecd59`;
        const response = await fetch(url);
        const result = await response.json();
        if (result.Search) {
            setMovies(result.Search);
        }
    }

    return (
        <>
            <div className="container my-4">
                <div className="row justify-content-start align-items-start">
                    <MovieCard movies={movies} />
                </div>
            </div>
        </>
    )
};

export default List; 