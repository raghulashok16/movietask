import { useState, useEffect } from "react";
import MovieCards from "../components/moviecards";
import SearchBox from "../components/searchbox";

const List = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchYear, setSearchYear] = useState('');
    const [total, setTotal] = useState("0");
    const [page, setPage] = useState(1)
    // let count = 0;

    const apiCall = async (searchText, searchYear, page) => {
        console.log(searchYear);
        const url = `http://www.omdbapi.com/?s=${searchText}&y=${searchYear}&apikey=eda7946a&page=${page}`;
        // console.log("movie api call");
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.Error);
        // console.log(page);
        if (result.Search) {
            // console.log(...movies, ...result.Search);
            // Array.from(set)
            setMovies(movies.concat(result.Search));
            // const set = new Set([movies.concat(result.Search)]);
            // console.log(JSON.stringify([...set]));
            // // setMovies(JSON.stringify([...set]))
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
            apiCall(searchText, searchYear, page);
        }
    }, [page])

    useEffect(() => {
        if (searchText.length > 0) {
            setMovies([]);
            setPage(1);
            setTimeout(() => {
                apiCall(searchText, searchYear, page);
            }, 1000)
        }
        if (searchText.length === 0) {
            setMovies([]);
            setPage(1);
        }
    }, [searchText, searchYear])

    const onChangeEvent = (e) => {
        const typedString = e.target.value;
        setSearchText(typedString);
    }
    const onChangeEvent2 = (e) => {
        const typedString2 = e.target.value;
        setSearchYear(typedString2);
    }


    return (
        <>
            {
                (searchText !== "") ? ((total === 'Movie not found!') ? (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">Movie not found!</p>) : (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">total result found = {total}</p>)) : (<p className="badge fs-5 ms-3 mt-3 text-bg-dark">Enter movie name to search</p>)
            }
            <div className="container-fluid mt-0 mb-4">
                <div className="row justify-content-end">
                    <div className="col-5"><SearchBox placeholder='search movie' onChangeHandler={onChangeEvent} /></div>
                    <div className="col-3"><SearchBox placeholder='search year' onChangeHandler={onChangeEvent2} /></div>
                </div>

                {/* <button type="button" onClick={apiCall} class="btn btn-secondary">Secondary</button> */}
                <div>
                    <MovieCards movies={movies} page={page} setPage={setPage} total={total} apiCall={apiCall} setMovies={setMovies} />
                </div>
            </div>
        </>
    )
};

export default List; 