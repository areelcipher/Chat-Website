import React, {Component} from 'react';

import {Link} from 'react-router-dom'
import M from 'materialize-css'

import './Navbar.css'

class Navbar extends Component {
    componentDidMount() {
        const options = {
            inDuration: 250,
            outDuration: 200,
            draggable: true
        };
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
        });
    }
    render() {
        return (
            <React.Fragment>
                <nav>
                    <div className="nav-wrapper green accent-2" id={'nav-wrapper'}>
                        <Link to={'/'}><span className="brand-logo">JUST Chat :)</span></Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/signup">Sign Up</a></li>
                            <li><a href="/login">Log In</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <h5 id={'h5'} className={'green-text accent-2'}>Areel Chat</h5>
                    <li className={'link green accent-2'}><a className={'green-text'}>Sign Up</a></li>
                    <li className={'link green accent-2'}><a href="/login" className={'green-text'}>Log In</a></li>
                </ul>
            </React.Fragment>
        )

    }
}

export default Navbar;
