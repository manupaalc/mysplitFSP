import { useDispatch, useSelector } from 'react-redux';
import './CreateGroupPage.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import CreateGroupForm from './CreateGroupForm';
import { useEffect } from 'react';
import { fetchFriends } from '../../store/friendsReducer';


const CreateGroupPage = () => {
const currentUser = useSelector(state => state.session.currentUser)
const dispatch = useDispatch();
 
useEffect(()=> {
    if(currentUser){
        dispatch(fetchFriends(currentUser['user'].id))
    }
}, [dispatch, currentUser])


if(!currentUser) return <Redirect to='/' />



return (
    
        <CreateGroupForm/>  
    )
}

export default CreateGroupPage;