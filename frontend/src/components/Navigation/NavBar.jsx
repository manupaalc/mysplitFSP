import './NavBar.css'

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavBar = () => {

    
    const currentUser = useSelector(state => state.session.currentUser)
    if (!currentUser){
        return (
            <>
                <header className="welcome-header">
                    <div className='logo'>
                        <img src="/logo.png" alt='logo' />
                        <p>mySplits</p>
                    </div>


                    <div id='access-buttons'>
                        <Link to='/login'>
                            < button className="login-button" > Login </button>
                        </Link>
                        <Link to='/signup'>
                            <button className="signup-button" > Sign Up </button>
                        </Link>

                    </div>

                </header>

            </>
        )
    }
};

export default NavBar;
