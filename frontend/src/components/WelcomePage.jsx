    
    import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './WelcomePage.css'
import { useSelector } from 'react-redux';

    const WelcomePage = () => {
        const currentUser = useSelector(state => state.session.currentUser);
        if (currentUser) return <Redirect to="/dashboard" />;
    return (
        <>
          
        
        </>
    )
    }

    export default WelcomePage;