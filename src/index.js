import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './style'
import {GlobalIconFont} from './statics/iconfont/iconfont'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <GlobalIconFont/>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);