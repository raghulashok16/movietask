import { Link, Outlet } from "react-router-dom";
const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fs-2">Movie Details</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to='favourite' className="nav-link active text-light badge bg-danger fs-5">Favourite</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Header;