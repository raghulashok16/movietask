import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard";
import SearchBox from "../components/searchbox";

const List = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');

    const apiCall = async (searchText) => {
        const url = `http://www.omdbapi.com/?s=${searchText}&apikey=722ecd59`;
        const response = await fetch(url);
        const result = await response.json();
        if (result.Search) {
            setMovies(result.Search);
        }
        // console.log(movies);
    }
    useEffect(() => {
        apiCall(searchText);
    }, [searchText])

    const onChangeEvent = (e) => {
        const typedString = e.target.value;
        setSearchText(typedString);
    }


    return (
        <>
            <div className="container my-4">
                <SearchBox placeholder='search movie' onChangeHandler={onChangeEvent} />

                <div className="row justify-content-start align-items-start">
                    <MovieCard movies={movies} />
                </div>
            </div>
        </>
    )
};

export default List; 