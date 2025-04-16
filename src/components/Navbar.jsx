import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">
                        HomePage
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">
                        AboutUs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" activeClassName="active">
                        PostList
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;