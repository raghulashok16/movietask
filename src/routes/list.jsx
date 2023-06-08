import { useState, useEffect } from "react";
import MovieCards from "../components/moviecards";
import SearchBox from "../components/searchbox";

const List = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [total, setTotal] = useState('0');

    const apiCall = async (searchText) => {
        const url = `http://www.omdbapi.com/?s=${searchText}&apikey=722ecd59`;
        const response = await fetch(url);
        const result = await response.json();
        if (result.Search) {
            setMovies(result.Search);
            setTotal(result.totalResults);
        }
        if (result.Error == "Too many results." || result.Error == "Movie not found!") {
            setMovies([]);
            setTotal(result.Error);
        }

    }
    useEffect(() => {
        apiCall(searchText);
        if (searchText == "") {
            setMovies([]);
        }
    }, [searchText])

    const onChangeEvent = (e) => {
        const typedString = e.target.value;
        setSearchText(typedString);
    }


    return (
        <>
            {
                (searchText != "") ? (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">total result found = {total}</p>) : (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">Enter movie name to search</p>)
            }
            <div className="container mt-0 mb-4">
                <SearchBox
                    placeholder='search movie'
                    onChangeHandler={onChangeEvent}
                />
                <div className="row justify-content-evenly">
                    <MovieCards
                        movies={movies}
                    />
                </div>
            </div>
        </>
    )
};

export default List; 