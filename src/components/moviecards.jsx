import Card from "./card";
import InfiniteScroll from "react-infinite-scroll-component";
const MovieCards = ({ movies, page, setPage, total }) => {



    return (
        <>
            {movies.length === 0 || (
                <InfiniteScroll dataLength={total}
                    next={() => {
                        // console.log("load more");
                        // console.log(total);
                        setPage(page + 1)
                    }}
                    hasMore={true}
                    className="row justify-content-evenly"
                    loader={<p className="w-100 text-center">Loading...</p>}
                    endMessage={
                        <p className="text-center w-100">
                            <b>End of List</b>
                        </p>
                    }
                >
                    {
                        console.log(movies)
                    }
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