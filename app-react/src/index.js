import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello'
// import Clock from './Clock'
// import Props from './Props'
// import State from './State'
// import Clock2 from './Clock2'
// import Events from './Events'
import Events2 from './Events2'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <Props attr1="porco" attr2="VALUE-2" attr3="VALUE-3"/>
  <React.StrictMode>  
    <Events2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
