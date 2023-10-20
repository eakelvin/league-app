import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

// const domain = process.env.DOMAIN
// const clientId = process.env.CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-rlyvpl8px2mkfnv8.us.auth0.com"
      clientId="FWG7EnBvF0SS2sjVNd09mRZhBkT7laLC"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
