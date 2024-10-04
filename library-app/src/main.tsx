import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'
import {store} from './redux/reduxStore'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Pass the store prop */}
      <App />
    </Provider>
  </React.StrictMode>,
)
