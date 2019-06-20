import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './index.css'

import BookList from '../../page/bookManager/book'
import OrderList from '../../page/bookManager/order'

class ContentIndex extends React.Component{
	
	render(){
		return(
			<div id="contentPage">
				<Switch>
					<Route exact path='/book/list' component={BookList}/>
					<Route exact path='/order/list' component={OrderList}/>
				</Switch>
			</div>
		)
	}
	
}

export default ContentIndex;