import Card from "./card";
const MovieCards = ({ movies }) => {
    // console.log(movies);
    // console.log(props.MovieCard);
    return (
        <>
            {
                movies.map((movie) => (
                    <div key={movie.imdbID} className="col-sm-2">
                        <Card movie={movie} />
                    </div>
                ))
            }

        </>
    )
};

export default MovieCards;