import { useDispatch, useSelector } from 'react-redux';
import './LeftColumn.css'
import { useEffect } from 'react';
import { fetchFriends } from '../../store/friendsReducer';
import { fetchGroups } from '../../store/groupsReducer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const LeftColumn = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)
   
    const friends = useSelector(state => state.entities.friends)
    const groups = useSelector(state => state.entities.groups)
    useEffect(() => {
        if(currentUser) {
            dispatch(fetchFriends(currentUser['user'].id))
        }
    },[dispatch, currentUser] )

    useEffect(()=> {
        if(currentUser){
            dispatch(fetchGroups(currentUser['user'].id))
        }
    }, [dispatch, currentUser])

    if (!currentUser) return null
    if (location.pathname === "/groups/new") return null

    return(
        <div className='left-column-container'> 
            <Link id='dashboard-title' to='/dashboard'>
                <img src="/logo.png" alt="logo-3" />
                <h3>Dashboard</h3>

            </Link>
            
           
            <h4>All Expenses</h4>
            <div >
                <div className='feature-title'>
                    <p>GROUPS</p><Link  to='/groups/new'><p>➕ add</p></Link> 
                </div>
                <ul className='feature-list'>
                    {Object.values(groups).map(group => (
                        <Link to={`/groups/${group.id}`}>
                            <li key={group.id}> ⇲ {group.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div >
                <div className='feature-title'>
                    <p>FRIENDS</p>
                </div>
                <ul className='feature-list'>
                    {Object.values(friends).map(friend => (
                        <Link to={`/friends/${friend.userId}`}>
                            <li key={friend.userId}>
                                ☺ {friend.username} 
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default LeftColumn;