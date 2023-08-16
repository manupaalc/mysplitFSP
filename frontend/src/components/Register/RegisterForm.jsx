import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css'
import { useState } from 'react';
import { createUser } from '../../store/usersReducer';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const RegisterForm = props => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[errors, setErrors] = useState([])
    
    if(sessionUser) return <Redirect to= '/' />
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(createUser({username, email, password }))
            .catch(async (res) => {
                let data;
                try {
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
        <div>
            <h1>INTRODUCE YOURSELF</h1>
            <form on onSubmit={handleSubmit}>
                <label> 
                    <p>Hi there! My name is </p>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    <p>Here's my email address </p>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    <p>and my password </p>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button>Sign me up!</button>
            </form>
        </div>
    )
}

export default RegisterForm; 