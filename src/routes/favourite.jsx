import { useEffect, useState } from "react";
import FavCard from "../components/favcard";
const Favourite = () => {
    const [fav, setFav] = useState([]);
    // useEffect(() => {

    //     if (fav != null || fav != undefined) {
    //         let fvv = JSON.parse(localStorage.getItem("imdbId"));
    //         if (fvv != null || fvv != undefined) {
    //             setFav(fvv);
    //         }
    //     }
    // }, [fav]);

    useEffect(() => {
        let cons = JSON.parse(localStorage.getItem("imdbId"));
        if (cons != null || cons != undefined) {
            setFav(cons);
            // fav = [...cons];
            // console.log(fav);
        }
    }, [])

    return (
        <>
            {
                console.log(fav)
            }
            <div className="row justify-content-evenly">
                {fav.map((id, i) => (
                    <FavCard key={i} idd={id} fav={fav} />
                ))
                }
            </div>
        </>
    )
};

export default Favourite;