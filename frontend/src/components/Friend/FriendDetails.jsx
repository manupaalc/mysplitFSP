import { useSelector } from 'react-redux'
import './FriendDetails.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom'
import FriendDetailsCentral from './FriendDetailsCentral'


const FriendDetails = () => {
    const currentUser = useSelector(state => state.session.currentUser)
    if(!currentUser) return <Redirect to='/' />
    
    return (
        <div id='friend-details-body'>
            <div className='central-feed'>
                <FriendDetailsCentral />
            </div>

        </div>
    )


}
export default FriendDetails