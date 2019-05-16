import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App';
import './static/css/reset.min.css'
import './static/css/common.less'


ReactDOM.render(<Provider store = {store}>
  <HashRouter>
    <App/>
  </HashRouter>
</Provider>, document.getElementById('root'));

