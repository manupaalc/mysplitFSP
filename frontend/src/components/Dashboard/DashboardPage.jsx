
import {  useSelector } from 'react-redux';
import './DashboardPage.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import CentralFeed from './CentralFeed';
import RightColumn from './RightColumn';

const DashboardPage = () => {
    const currentUser = useSelector(state => state.session.currentUser)
    if (!currentUser) return <Redirect to='/' />
    
    return (
    
    <>
     <div className='dashboard-body'>
        <div className='central-feed'><CentralFeed/></div>
        <div className='right-column'><RightColumn/></div>
     </div>
    </>
    )
}

export default DashboardPage;