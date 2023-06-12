import { useEffect, useState } from "react";
import Card from "./card";
import InfiniteScroll from "react-infinite-scroll-component";
const MovieCards = ({ movies, page, setPage, total }) => {
    const [fetchWork, setFetchWork] = useState(false)
    const [has, setHas] = useState(true)
    // console.log(fetchWork, movies, page);
    // useEffect(() => {
    //     if (page >= 7) {
    //         setHas(false);
    //     }
    // }, [page])

    return (
        <>
            {movies.length === 0 || (
                <InfiniteScroll dataLength={total}
                    next={() => {
                        if (fetchWork === false) {
                            setPage(page + 1)
                        }
                    }}
                    hasMore={has}
                    loader={<p className="w-100 text-center">Loading...</p>}
                    className="d-flex flex-wrap justify-content-evenly"
                    endMessage={
                        <p className="text-center w-100">
                            <b>End of List</b>
                        </p>
                    }
                >
                    {
                        movies.map((movie) => (
                            <Card key={movie.imdbID} movie={movie} />
                        ))
                    }
                </InfiniteScroll >
            )
            }
        </>
    )
};

export default MovieCards;