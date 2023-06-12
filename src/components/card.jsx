import { useEffect, useState } from "react";
import "../styles/card.css";

const Card = ({ movie }) => {
    const [fullDetails, setFullDetails] = useState([]);

    const apiCall2 = async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=1935caa6`;
        // console.log("imdb id api call");
        const response = await fetch(url);
        const result = await response.json();
        setFullDetails(result)
    }

    useEffect(() => {
        apiCall2(movie.imdbID)
    }, [])

    return (
        <>
            <div className="col-lg-5 m-3 hvr align-items-end rounded-1  bg-light shadow-sm" >
                <div className="row">
                    <div className="col">
                        <img src={movie.Poster} className="col-6 card-img-top rounded-1 img-fluid " alt="Image Not Available" />
                    </div>
                    <div className="col-6  card-body">
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