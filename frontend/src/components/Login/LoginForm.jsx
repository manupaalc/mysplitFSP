import './LoginForm.css'
import React, {useState} from 'react';
import { loginUser } from '../../store/usersReducer';

import {useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    if(sessionUser) return <Redirect to='/' />
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors([]);
        return dispatch(loginUser({email, password}))
            .catch(async (res) =>{
                let data;
                try{
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText])
            })
    }


    return (
        <form on onSubmit={handleSubmit}>
            <ul>{errors.map(error => <li key={error}>{error}</li>)}</ul>
            <label>Email address
                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} required />
            </label>
            <label>Password
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            </label>
            <button type='submit'>Log in</button>
        </form>
    )

}

export default LoginForm;