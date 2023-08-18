import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { restoreSession } from './utils/authUtils';
//import { deleteSession, postSession, postUser } from './utils/sessionApiUtils';
//import { createUser, loginUser, logoutUser } from './store/usersReducer';
import configureStore from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'))
const currentUser = sessionStorage.getItem('currentUser')

const csrfToken = sessionStorage.getItem('csrfToken')



let initialState = {}
const currentUserData = JSON.parse(currentUser)


if (currentUserData) {
  initialState = {
    entities: {
      users: {
        [currentUserData.id]: currentUserData
      }
    },
    session: {
      currentUser : currentUserData.id
    }
  }
}

const store = configureStore(initialState)


const renderApp = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

// restoreSession().then(renderApp)

if(!currentUser || !csrfToken){
  restoreSession().then(renderApp)
} else {
  renderApp()
}

  
// for testing only
// window.postUser = postUser
// window.postSession = postSession
// window.deleteSession = deleteSession
// window.loginUser = loginUser
// window.logoutUser = logoutUser
// window.signupUser = createUser
