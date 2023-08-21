import { useSelector } from 'react-redux';
import './CreateGroupPage.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import CreateGroupForm from './CreateGroupForm';


const CreateGroupPage = () => {
const currentUser = useSelector(state => state.session.currentUser)
if(!currentUser) return <Redirect to='/' />

return (
    <div className='create-group-page'>
        <img src="/logo.png" alt="logo" id='create-page-img' />
        <div className='create-group-form-container'>
            <CreateGroupForm/>
        </div>
    </div>
)
}

export default CreateGroupPage;