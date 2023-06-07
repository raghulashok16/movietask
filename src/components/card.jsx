const Card = ({ movie }) => {
    return (
        <>
            <div className="card my-3" >
                <img src={movie.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="">{movie.Title}</p>
                    <p className="">{movie.Year}</p>
                    <p className="">{movie.Type}</p>
                    <p className="">{movie.imdbID}</p>
                </div>
            </div >

        </>
    )
}

export default Card;