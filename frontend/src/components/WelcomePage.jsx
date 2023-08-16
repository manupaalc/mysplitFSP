import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './WelcomePage.css'

const WelcomePage = () => {
return (
    <>
        <header>
            <h1>mySplit</h1>
            <div id='acces-buttons'>
                <Link to='/login'>
                    < button > Login </button>
                </Link>
                <Link to='/signup'>
                    <button > Sign Up </button>
                </Link>

            </div>

        </header>
    
    </>
)
}

export default WelcomePage;