import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import QrCode from './QrCode'
import "./QrCode.css"
// import UserCard from './UserCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard/> */}
    <QrCode/>
  </StrictMode>,
)
