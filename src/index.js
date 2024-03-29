import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UseDataProvider } from './Components/fetchData/useData';
import reportWebVitals from './reportWebVitals';
import { QueryContextProvider } from './Components/Searchbar/SearchDataProvider';
import { UseLeftDataProvider } from './Components/LeftBar/useLeft';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Starwars Encyclopedia</title>
    </Helmet>
    <UseLeftDataProvider>
    <QueryContextProvider>
      <UseDataProvider>
        <App />
      </UseDataProvider>  
    </QueryContextProvider>
    </UseLeftDataProvider>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
