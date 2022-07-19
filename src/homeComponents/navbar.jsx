import React, {Component} from 'react';
import { NavLink,Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link to='/' className="navbar-brand">Algorithm Visualizer</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink to='/pathfinder' className="nav-link">Path Finder</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/sort' className="nav-link">Sorting Algorithms</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/recursivesort' className="nav-link">Recursive Sorting</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/nqueen' className="nav-link">N Queen</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/convexhull' className="nav-link">Convex Hull</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/binarysearch' className="nav-link">Binary Search</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/about' className="nav-link">About US</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/login' className="nav-link">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/signup' className="nav-link">Sign Up</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;