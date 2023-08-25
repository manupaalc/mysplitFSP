import { useSelector } from 'react-redux';
import './FriendDetailsCentral.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const FriendDetailsCentral = () => {

    const friends = useSelector(state => state.entities.friends)
    const {friendId} = useParams();
    const friend = friends[friendId]

    if(!friend) return null

    return (
        <div className='friend-details-central'>
            {friend.user_photo_url && (
                <img src={friend.user_photo_url} id='friend-photo' alt={`Group: ${friend.username}`}/>
            )}
        <h2>{friend.username}</h2>
        </div>
    )

}

export default FriendDetailsCentral;