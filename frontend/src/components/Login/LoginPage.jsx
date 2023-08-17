import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import './LoginForm.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react'; // Import useState

const LoginPage = () => {
    const currentUser = useSelector(state => state.session.currentUser);
    const [loginError, setLoginError] = useState(null); // Initialize the state variable

    if (currentUser) return <Redirect to="/dashboard" />;

    return (
        <div className='login-page-container'>
            {loginError && <div className="login-error">{loginError}</div>}
            <LoginForm setLoginError={setLoginError} /> {/* Pass the setter function as a prop */}
        </div>
    );
};

export default LoginPage;

