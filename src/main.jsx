import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource-variable/open-sans';
import '@fontsource-variable/montserrat';
import './index.css'
import { LanguageProvider } from './components/Util/LanguageContext' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
