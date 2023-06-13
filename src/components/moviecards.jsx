import Card from "./card";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const MovieCards = ({ movies, page, setPage, total, apiCall, setMovies }) => {
    const [has, setHas] = useState(true)
    const [fetchWork, setFetchWork] = useState(false)
    // console.log(fetchWork, movies, page);
    // useEffect(() => {


    //     if (page > (movies.length / 10)) {
    //         // console.log(movies.length);
    //         // setHas(false);
    //     }
    // }, [page])



    return (
        <>
            {movies.length === 0 || (
                <InfiniteScroll dataLength={movies.length}
                    next={() => {

                        console.log(movies.length)
                        setPage(page + 1)
                    }}
                    hasMore={(page <= (movies.length / 10))}
                    className="row justify-content-evenly"
                    loader={<p className="w-100 text-center" > Loading...</p >}
                    endMessage={
                        <p className="text-center w-100" >
                            <b>End of List</b>
                        </p >
                    }   >
                    {
                        movies.map((movie, i) => (
                            <Card key={i} movie={movie} indexx={i} />
                        ))
                    }
                </InfiniteScroll >
            )
            }
        </>
    )
};

export default MovieCards;