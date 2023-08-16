
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/usersReducer';
import './DashboardPage.css'
import { useEffect } from 'react';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)
    useEffect(()=>{
       
    })
    return (
    <button onClick={()=> dispatch(logoutUser(currentUser.id))}>Log out</button>
    )
}

export default DashboardPage;