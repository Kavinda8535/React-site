import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <div className='logo'>
            LOGO
            </div>

            <nav>
                <ul>
                    <li className="first">
                        <Link to="/">Home</Link>
                        {/* <a href="#">Home</a> */}
                    </li>
                    <li>
                        <Link to="/Products">Products</Link>
                        {/* <a href="#">Products</a> */}
                    </li>
                    <li>
                        <Link to="/Movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                        {/* <a href="#">Contact</a> */}
                    </li>
                    <li className="last animated pulse">
                        <Link to="/Signup">Signup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
