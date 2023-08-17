
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/usersReducer';
import './DashboardPage.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)
    if (!currentUser) return <Redirect to='/' />
    
    return (
    <button onClick={()=> dispatch(logoutUser(currentUser.id))}>Log out</button>
    )
}

export default DashboardPage;