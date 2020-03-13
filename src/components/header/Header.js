import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2 className='head-line'>Friend List Creator</h2>
            <nav>
                <a href="#home">Home</a>
                <a href="#user">People May Know</a>
                <a href="#friend">Friends</a>
            </nav>
        </div>
    );
};

export default Header;