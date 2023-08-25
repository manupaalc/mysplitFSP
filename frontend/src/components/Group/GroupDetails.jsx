
import { Redirect } from 'react-router-dom/cjs/react-router-dom'
import './GroupDetails.css'
import GroupDetailsCentral from './GroupDetailsCentral'
import GroupDetailsRightColumn from './GroupDetailsRightColumn'
import { useSelector } from 'react-redux'

const GroupDetails = () => {
    const currentUser = useSelector(state => state.session.currentUser)
    if (!currentUser) return <Redirect to='/'/>
   
 return(
    <div id='group-details-body'>
        <div className="central-feed">
            < GroupDetailsCentral/>
        </div>
        <div className="right-column">
            < GroupDetailsRightColumn/>
        </div>
    </div>  
 )
}

export default GroupDetails