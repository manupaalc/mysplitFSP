import './LoginForm.css';
import React, { useState } from 'react';
import { loginUser } from '../../store/usersReducer';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const currentUser = useSelector(state => state.session.currentUser);

    const handleSubmit = async e => {
        e.preventDefault();
       

    

        dispatch(loginUser({ email, password })).catch(async res => {
        
        });
    };

    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login-form">
            <form  onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <label>
                    Email address
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className='input-login'
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        className='input-login'
                    />
                </label>
                <button type="submit" className="login-submit">
                    Log in
                </button>
                
            </form>
            <button
                type="button"
                className="login-submit"
                onClick={() => dispatch(loginUser({email:'messi@god.com', password:'password'}))}
            >
                Login as Messi
            </button>
        </div>
    );
};

export default LoginForm;
