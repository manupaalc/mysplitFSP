import { useDispatch, useSelector } from 'react-redux';
import './LeftColumn.css'
import { useEffect } from 'react';
import { fetchFriends } from '../../store/friendsReducer';

const LeftColumn = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)
    const friends = useSelector(state => state.entities.friends)
    console.log(friends)
    useEffect(() => {
        if(currentUser) {
            dispatch(fetchFriends(currentUser['user'].id))
        }
    },[dispatch, currentUser] )

    return(
        <div>
            <h3>Dashboard</h3>
            <h4>All Expenses</h4>
            <div className='group-list'>
                <p>GROUPS</p>
            </div>
            <div className='friend-list'>
                <p>FRIENDS</p>
                <ul>
                    {Object.values(friends).map(friend => (
                        <li key={friend.id}>
                            {friend.username} 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default LeftColumn;