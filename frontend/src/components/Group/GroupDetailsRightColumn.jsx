import './GroupDetailsRightColumn.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useSelector } from 'react-redux';

const GroupDetailsRightColumn = () => {

    const currentUser = useSelector(state => state.session.currentUser)
    const { groupId } = useParams();
    
    const friends = useSelector(state => state.entities.friends)
    const groups = useSelector(state => state.entities.groups)
    const group = groups[groupId]
    if (!group) return null;
   




    return (
        <div className='right-column-container'>
            <h3>GROUP MEMBERS</h3>
            <ul className='user-list'>
                <li key={currentUser.user.id} className='user-item'>
                    <img src={currentUser.user.photoUrl} alt={`${currentUser.user.username}'s Profile`} className='user-avatar' />
                    <span className='username'>{currentUser.user.username}</span>
                </li>
                {group.group_users && group.group_users.map(user => {
                    if (user.user_id !== currentUser.user.id) {
                        const friend = friends[user.user_id];
                        return (
                            <li key={user.user_id} className='user-item'>
                                <img src={friend.userPhotoUrl} alt={`${friend.username}'s Profile`} className='user-avatar' />
                                <span className='username'>{friend.username}</span>
                            </li>
                        );
                    } else {
                        return null; // Don't render for the current user
                    }
                })}

            </ul>
            
        </div>
    )
}

export default GroupDetailsRightColumn;