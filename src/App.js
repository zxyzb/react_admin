import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'
import Index from './router/index/index.js';

import './App.css';
import { Button } from 'antd';


class App extends Component {
  render() {
    return (
        <Route path='/' component={Index}/>
    )
  }
}
export default App;
