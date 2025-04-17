import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar sticky-top bg-body-tertiary p-0">
            <div className="container-fluid text-bg-danger p-5">
                <NavLink className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/">
                    HomePage
                </NavLink>
                <NavLink className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/about">
                    AboutUs
                </NavLink>
                <NavLink className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/posts">
                    PostList
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;