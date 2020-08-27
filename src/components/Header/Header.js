import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="online" >ONLINE COURSES </h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/courses">Our Courses</a>
                <a href="/category">Category</a>
            </nav>
        </div>
    );
};

export default Header;