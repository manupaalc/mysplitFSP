import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';

import './LoginPage.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const LoginPage = () => {
    
    const errors = useSelector(state => state.errors.loginUser)
    const currentUser = useSelector(state => state.session.currentUser);
    if (currentUser) return <Redirect to="/dashboard" />;

    return (
        <div className='login-page-container'>
            {errors.length > 0 && <div className="login-error">Whoops! We could not find an account for that email address and password. Maybe you have forgotten your password?</div>}
            <LoginForm  /> 
        </div>
    );
};

export default LoginPage;

