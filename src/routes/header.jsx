import { Link, Outlet } from "react-router-dom";
const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-md navbar-light bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand text-dark badge bg-warning fs-2">Movie Details</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to='favourite' className=" nav-link text-white fs-5">Favourite</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white fs-5 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-5" type="search" placeholder="Search Movie" aria-label="Search" />
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