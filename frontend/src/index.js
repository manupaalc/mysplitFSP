import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { restoreSession } from './utils/authUtils';



const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// restoreSession().then(renderApp)
const currentUser = sessionStorage.getItem('currentUser')
const csrfToken = sessionStorage.getItem('csrfToken')
if(!currentUser || !csrfToken){
  restoreSession().then(renderApp)
} else {
  renderApp()
}

  
