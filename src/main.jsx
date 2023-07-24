import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import  songSlicesReducer from './Components/ReduxToolKit/Redux1.jsx'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer : {
    song : songSlicesReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>  
    <App />
    </Provider>
  // {/* </React.StrictMode>, */}
);
