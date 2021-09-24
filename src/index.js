import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MuContextProvider} from './DataContext'

ReactDOM.render(
      <React.StrictMode>
          <MuContextProvider>
              <App />
          </MuContextProvider>
      </React.StrictMode>,
        document.getElementById('root')
);

reportWebVitals();
