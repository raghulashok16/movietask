import { useEffect, useState } from "react";


const FavCard = ({ idd, fav }) => {
    const [fullDetails, setFullDetails] = useState([]);

    const apiCall2 = async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=cb859cb`;
        const response = await fetch(url);
        const result = await response.json();
        setFullDetails(result)
    }

    useEffect(() => {
        apiCall2(idd)
    }, [])

    const delData = () => {
        console.log(fav);
        console.log(idd);
        let fav1 = fav.filter((f) => f != idd)
        console.log(fav1);
        if (fav1 === null | fav1 === undefined) {
            localStorage.setItem("imdbId", JSON.stringify([]));
        } else {
            localStorage.setItem("imdbId", JSON.stringify(...fav1));
        }
        // localStorage.removeItem("imdbId");
    }

    return (
        <>
            <div className="col-lg-5 m-3 hvr align-items-end rounded-1  bg-light shadow-sm" >
                <div className="row">
                    <div className="col">
                        <img src={fullDetails.Poster} className="col-6 card-img-top rounded-1 img-fluid " alt="Image Not Available" />
                    </div>
                    <div className="col-6  card-body">
                        <p className="">Title : {fullDetails.Title}</p>
                        <p className="">Year : {fullDetails.Year}</p>
                        <p className="">IMDB Rating : {fullDetails.imdbRating}</p>
                        <button type="button" onClick={delData} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                        </svg></button>

                    </div>
                </div>
            </div >
        </>
    )
}

export default FavCard;