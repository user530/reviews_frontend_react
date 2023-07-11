import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return <>
        <div className='header'>
            <div className="container">
                <Link to={'/'}>
                    <h1>
                        Main page
                    </h1>
                </Link>
            </div>
        </div>
    </>
};

export default Header;