import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import GlobalContextProvider from './context/globalContext.jsx'
import ThemeContextProvider from './context/themeContext.jsx'
import History from './router/history.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode
  <ThemeContextProvider>
    <GlobalContextProvider>
      <History />
    </GlobalContextProvider>
  </ThemeContextProvider>
  //  </React.StrictMode>
)
