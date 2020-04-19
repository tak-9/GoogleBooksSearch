import React from "react";
import logo from "../img/logo.png"

function Header(){
    return (
        <div>
            <nav className="navbar navbar-expand-sm  navbar-dark bg-dark text-white mb-4">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} height={40} className="d-inline-block align-top" alt="logo" />
                        <span className="align-middle navbar-title">&nbsp; Books Search</span>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Saved</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header;