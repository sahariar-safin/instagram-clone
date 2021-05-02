import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggingUser, setLoggingUser] = useContext(UserContext);
    return (
        <div style={{ backgroundColor: "white", borderBottom: "1px solid lightgray" }}>
            <nav class="container navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex ms-auto me-auto">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {loggingUser.photoURL
                                    ? <img style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                    }} src={loggingUser.photoURL} alt="" />
                                    : <Link class="nav-link" aria-current="page" to="/login">Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;