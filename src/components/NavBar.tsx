import React from "react";
import {NavLink} from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Todos</NavLink></li>
                    <li><NavLink to="/about">Information</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;