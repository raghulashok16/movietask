import { useEffect, useState } from "react";
import "../styles/card.css";

const Card = ({ movie, indexx, filterGenre }) => {
    const [fullDetails, setFullDetails] = useState([]);
    // console.log(filterGenre);

    const apiCall2 = async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=eda7946a`;
        console.log('called');
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
            cons.push(movie.imdbID);
            // console.log(typeof movie.imdbID);
            // console.log(cons1);
            localStorage.setItem("imdbId", JSON.stringify(cons));
        }
        // localStorage.removeItem("imdbId");
    }

    return (
        <>
            {
                console.log((fullDetails.Genre).includes(filterGenre))
            }
            {((fullDetails.Genre).includes(filterGenre)) || (


                <div className="col-lg-5 m-3 hvr align-items-end rounded-1  shadow-sm" >
                    <div className="row h-100">
                        <div className="col">
                            <img src={movie.Poster} className="col-6 card-img-top rounded-1 img-fluid " alt="Image Not Available" />
                        </div>
                        <div className="col-6  card-body">
                            <p className="mt-2 mb-0">Title : {movie.Title}</p>
                            <p className="mb-0">Year : {movie.Year}</p>
                            <p className="mb-4">IMDB Rating : {fullDetails.imdbRating}/10</p>
                            <button type="button" className="btn btn-outline-success" onClick={toFav}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill mb-0" viewBox="0 0 16 16" >
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg> Add to Favorite</button>
                            <br />
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn btn-outline-dark my-3" data-bs-toggle="modal" data-bs-target={`#exampleModal${indexx}`} onClick={() => apiCall2(movie.imdbID)}>
                                See Details..
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id={`exampleModal${indexx}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-center w-100" id="exampleModalLabel">{fullDetails.Title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body bg-body-secondary">
                                            <div className="row justify-content-evenly my-3 align-items-center">
                                                <div className="col-2"> <img src={fullDetails.Poster} className="col-6 card-img-top rounded-1 img-fluid " alt="Image Not Available" /></div>
                                                <div className="col-6">
                                                    <p className="mb-0">Released : {fullDetails.Released}</p>
                                                    <p className="mb-0">IMDB Rating : {fullDetails.imdbRating}/10</p>
                                                    <p className="mb-0">Runtime : {fullDetails.Runtime}</p>
                                                    <p className="mb-0">Genre : {fullDetails.Genre}</p>
                                                    <p className="mb-0">Director : {fullDetails.Director}</p>
                                                    <p className="mb-0">Writer : {fullDetails.Writer}</p>
                                                    <p className="mb-0">Actors : {fullDetails.Actors}</p>
                                                    <p className="mb-0">Awards : {fullDetails.Awards}</p>
                                                    <p className="mb-0">BoxOffice : {fullDetails.BoxOffice}</p>
                                                    <p className="h4 mt-3 mb-1">Plot</p>
                                                    <div className="col-8">  <p className="mb-0">{fullDetails.Plot}</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div >
            )

            }
        </>

    )
}

export default Card;