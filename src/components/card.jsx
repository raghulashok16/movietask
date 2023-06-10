import { useEffect, useState } from "react";

const Card = ({ movie }) => {
    const [fullDetails, setFullDetails] = useState([]);

    const apiCall = async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=9ad3dd59`;
        const response = await fetch(url);
        const result = await response.json();
        setFullDetails(result)

    }
    useEffect(() => {
        apiCall(movie.imdbID)
    })
    return (
        <>
            <div className="col p-3 border border-dark align-items-end rounded-1" >
                <div className="row">
                    <div className="col p-0 m-0">
                        <img src={movie.Poster} className="col-6 card-img-top  rounded-1 p-0 mt-auto " alt="Image Not Found" />
                    </div>
                    <div className="col-6 ms-2 card-body">
                        <p className="">Title : {movie.Title}</p>
                        <p className="">Year : {movie.Year}</p>
                        <p className="">IMDB Rating : {fullDetails.imdbRating}</p>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Card;