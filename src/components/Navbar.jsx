import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        HomePage
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        AboutUs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts">
                        PostList
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;