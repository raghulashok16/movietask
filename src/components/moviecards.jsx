import Card from "./card";
import InfiniteScroll from "react-infinite-scroll-component";
const MovieCards = ({ movies, setMovies, page, setPage }) => {
    // console.log(movies);
    // console.log(props.MovieCard);
    // console.log(movies.length);
    const loadMore = () => {
        console.log("load more");
    }
    return (
        <>
            {/* <InfiniteScroll dataLength={movies.length} next={loadMore} className=""> */}
            {
                movies.map((movie) => (
                    <Card key={movie.imdbID} movie={movie} />
                ))
            }
            {/* </InfiniteScroll> */}
        </>
    )
};

export default MovieCards;