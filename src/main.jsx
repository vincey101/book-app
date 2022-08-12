import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from "react-toast-notifications";


// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <ToastProvider autoDismiss={true} autoDismissTimeout="7000">
        <App />
      </ToastProvider>
    </RecoilRoot>
  </React.StrictMode >
)
