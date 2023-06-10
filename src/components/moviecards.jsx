import { useState } from "react";
import Card from "./card";
import InfiniteScroll from "react-infinite-scroll-component";
const MovieCards = ({ movies, setMovies, page, setPage }) => {

    console.log(page);

    return (
        <>
            {movies.length === 0 || (
                <InfiniteScroll dataLength={movies.length} next={() => { setPage(page + 1) }} hasMore={true}
                    loader={<p className="w-100 text-center">Loading...</p>}
                    className="d-flex flex-wrap justify-content-evenly">
                    {
                        movies.map((movie) => (
                            <Card key={movie.imdbID} movie={movie} />
                        ))
                    }
                </InfiniteScroll>
            )
            }
            {/* <InfiniteScroll dataLength={num.length} next={() => { setNum(num.concat(num2)) }} hasMore={true}
                loader={<h2>loading...</h2>} >
                {
                    num.map((nu) => {
                        <h1>{nu}</h1>
                    })
                }
            </InfiniteScroll> */}
        </>
    )
};

export default MovieCards;