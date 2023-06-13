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
            console.log(fav1);
            localStorage.setItem("imdbId", JSON.stringify([]));
        } else {
            localStorage.setItem("imdbId", JSON.stringify(...fav1));
            console.log(fav1);
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
                        <button type="button" onClick={delData} className="btn btn-danger" >Remove from favorite</button>

                    </div>
                </div>
            </div >
        </>
    )
}

export default FavCard;