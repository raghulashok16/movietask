import { useState, useEffect } from "react";
import MovieCards from "../components/moviecards";
import SearchBox from "../components/searchbox";

const List = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [total, setTotal] = useState('0');
    const [page, setPage] = useState(1)
    let count = 0;

    const apiCall = async (searchText, page) => {
        const url = `http://www.omdbapi.com/?s=${searchText}&apikey=9d1abceb&page=${page}`;
        console.log("requested 1");
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.Error);
        // console.log(page);

        if (result.Search) {
            if (movies === null) {
                setMovies(result.Search);
            } else if (page > 1) {
                setMovies(movies.concat(result.Search));
            } else {
                setMovies(result.Search);
            }
            setTotal(result.totalResults);
        }
        if (result.Error === "Too many results." || result.Error === "Movie not found!" || result.Error === "Request limit reached!") {
            setMovies([]);
            setTotal(result.Error);
        }
    }
    useEffect(() => {
        if (searchText !== "") {
            apiCall(searchText, page);
        }
        if (searchText === "") {
            setMovies([]);
            setPage(1);
        }
    }, [page, searchText])

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
                <div className="row justify-content-evenly">
                    <MovieCards movies={movies} page={page} setPage={setPage} total={total} />
                </div>
            </div>
        </>
    )
};

export default List; 