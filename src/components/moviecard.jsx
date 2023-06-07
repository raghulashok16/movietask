import Card from "./card";
const MovieCard = ({ movies }) => {
    console.log(movies);
    // console.log(props.MovieCard);
    return (
        <>
            {
                movies.map((movie) => (
                    <Card key={movie.Title} movie={movie} />))
            }

        </>
    )
};

export default MovieCard;