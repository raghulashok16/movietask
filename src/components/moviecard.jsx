import Card from "./card";
const MovieCard = ({ movies }) => {
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

export default MovieCard;