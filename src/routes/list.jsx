import { useState, useEffect } from "react";
import MovieCards from "../components/moviecards";
import SearchBox from "../components/searchbox";

const List = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [total, setTotal] = useState('0');
    const [page, setPage] = useState(1)
    // let count = 0;

    const apiCall = async (searchText, page) => {
        const url = `http://www.omdbapi.com/?s=${searchText}&apikey=1935caa6&page=${page}`;
        // console.log("movie api call");
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.Error);
        // console.log(page);

        if (result.Search) {
            setMovies(movies.concat(result.Search));
            setTotal(result.totalResults);
        }
        if (result.Error === "Too many results." || result.Error === "Movie not found!" || result.Error === "Request limit reached!") {
            setMovies([]);
            setPage(1);
            setTotal(result.Error);
        }

    }
    useEffect(() => {
        if (page > 1) {
            apiCall(searchText, page);
        }
    }, [page])

    useEffect(() => {
        if (searchText !== "") {
            setMovies([]);
            setPage(1);
            apiCall(searchText, page);
        }
        if (searchText === "") {
            setMovies([]);
            setPage(1);
        }
    }, [searchText])

    const onChangeEvent = (e) => {
        const typedString = e.target.value;
        setSearchText(typedString);
    }


    return (
        <>
            {
                (searchText !== "") ? ((total === 'Movie not found!') ? (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">Movie not found!</p>) : (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">total result found = {total}</p>)) : (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">Enter movie name to search</p>)
            }
            <div className="container-fluid mt-0 mb-4">
                <SearchBox placeholder='search movie' onChangeHandler={onChangeEvent} />
                {/* <button type="button" onClick={apiCall} class="btn btn-secondary">Secondary</button> */}
                <div>
                    <MovieCards movies={movies} page={page} setPage={setPage} total={total} />
                </div>
            </div>
        </>
    )
};

export default List; 