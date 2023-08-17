import { useSelector } from 'react-redux';
import RegisterForm from './RegisterForm';
import './RegisterPage.css';
import { Redirect } from 'react-router-dom';

const RegisterPage = () => {
    const currentUser = useSelector(state => state.session.currentUser);
    if (currentUser) return <Redirect to="/dashboard" />;

    return (
        <div className="register-page">
            <img src="/logo.png" alt="logo" className="register-image" />
            <div className="register-form-container">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
