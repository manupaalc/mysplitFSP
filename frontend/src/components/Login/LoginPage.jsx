import { useSelector } from 'react-redux'
import LoginForm from './LoginForm'
import './LoginForm.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const LoginPage = () =>{
    const currentUser = useSelector(state =>state.session.currentUser )
    if(currentUser) return <Redirect to='/dashboard'/>
    return (
        <>
            <LoginForm />
        </>
    )
}
export default LoginPage