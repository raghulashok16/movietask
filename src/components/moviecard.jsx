import Card from "./card";
const MovieCard = ({ movies }) => {
    console.log(movies);
    // console.log(props.MovieCard);
    return (
        <>
            {
                movies.map((movie) => (
                    <div className="col-sm-2">
                        <Card key={movie.Title} movie={movie} />
                    </div>
                ))
            }

        </>
    )
};

export default MovieCard;