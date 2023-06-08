import Card from "./card";
const MovieCards = ({ movies }) => {
    // console.log(movies);
    // console.log(props.MovieCard);
    return (
        <>
            {
                movies.map((movie) => (
                    <Card key={movie.imdbID} movie={movie} />
                ))
            }

        </>
    )
};

export default MovieCards;