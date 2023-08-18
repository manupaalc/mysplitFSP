import './NavBar.css'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../store/usersReducer';



const NavBar = () => {
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false)
    const currentUser = useSelector(state => state.session.currentUser)
   
    if (!currentUser){
        return (
            <>
                <header className="welcome-header">
                    <Link to='/' className='logo'>
                        <img src="/logo.png" alt='logo' />
                        <p>mySplits</p>
                    </Link>


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
    } else {
        return (
        <header className='logged-in-header'>
            <Link to='/' className='logo-2'>
                <img src="/logo.png" alt="logo-2" />
                <p>mySplits</p>
            </Link>
            <div className='user-dropdown' onClick={() => setShowDropdown(!showDropdown)}>
                <span>{currentUser.username}</span>
                <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                    <Link to='/groups/new'>Create Group</Link>
                    <p onClick={() => dispatch(logoutUser(currentUser.id))}>Log out</p>
                </div>

            </div>

        </header>
        )
    }
};

export default NavBar;
