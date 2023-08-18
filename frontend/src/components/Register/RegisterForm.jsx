import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css';
import React, { useState } from 'react';
import { createUser, loginUser } from '../../store/usersReducer';

const RegisterForm = props => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(state => state.errors.createUser)
    const [showInputs, setShowInputs] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        return dispatch(createUser({ username, email, password }))
            
    };

    return (
        <div className="register-form">
            <h1>INTRODUCE YOURSELF</h1>
            {errors && errors.length > 0 && (
                <div className="error-message">
                    The following errors occurred:
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Hi there! My name is </p>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        onFocus={()=>setShowInputs(true)}
                        required
                    />
                </label>
                {showInputs &&(
                    <div className='hiding-labels' >
                        <label>
                            <p>Here's my email address </p>
                            <input
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <p>and my password </p>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                )}
                <button className="register-button">Sign me up!</button>
            </form>
            <button
                className="login-as-messi-button"
                onClick={() =>
                    dispatch(
                        loginUser({
                            email: 'messi@god.com',
                            password: 'password'
                        })
                    )
                }
            >
                Login as Messi
            </button>
        </div>
    );
};

export default RegisterForm;
