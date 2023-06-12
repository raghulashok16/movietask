import { useEffect, useState } from "react";
import "../styles/card.css";

const Card = ({ movie }) => {
    const [fullDetails, setFullDetails] = useState([]);

    const apiCall2 = async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=cb859cb`;
        const response = await fetch(url);
        const result = await response.json();
        setFullDetails(result)
    }

    useEffect(() => {
        apiCall2(movie.imdbID)
    }, [])

    const toFav = () => {

        let cons = JSON.parse(localStorage.getItem("imdbId"));
        if (cons === null || cons === undefined) {
            localStorage.setItem("imdbId", JSON.stringify([movie.imdbID]));
        } else {
            localStorage.setItem("imdbId", JSON.stringify([movie.imdbID, ...cons]));
        }
        // localStorage.removeItem("imdbId");
    }

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
                        <button type="button" onClick={toFav}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16" >
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg></button>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Card;