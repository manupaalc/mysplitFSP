import { useDispatch } from 'react-redux';
import './RegisterForm.css';
import React, { useState } from 'react';
import { createUser, loginUser } from '../../store/usersReducer';

const RegisterForm = props => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);

        return dispatch(createUser({ username, email, password }))
            .catch(async res => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    //data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    };

    return (
        <div className="register-form">
            <h1>INTRODUCE YOURSELF</h1>
            {errors.length > 0 && (
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
                        required
                    />
                </label>
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
