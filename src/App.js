import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Index from './router/index/index.js';
import Login from './page/login/index.js'

import './App.css';


class App extends Component {
  render() {
		
    return (
			<Switch>
				<Route path='/login' component={Login}/>
				<Route path='/' component={Index}/>
			</Switch>
    )
  }
}
export default App;
