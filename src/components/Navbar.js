import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    let darkStyle = {
        backgroundColor: '#212529',
        color: 'white'
    };

    let lightStyle = {
        backgroundColor: 'white',
        color: '#212529'
    };
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand mx-3" to="/">{props.heading}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>

                <div className="form-check form-switch mx-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                        onClick={props.changeMode} style={props.mode === 'dark' ? darkStyle : lightStyle} />
                    <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Change Mode</label>
                </div>

            </nav>

        </div>
    )
}
