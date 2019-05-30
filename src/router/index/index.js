import React from 'react'
import { Layout, Button, Icon } from 'antd'
import SiderNav from '../../components/SiderNav'
import HeaderContent from '../../components/Header'
import './index.css'

const {Sider, Header, Content, Footer} = Layout


class Index extends React.Component{
	state = {
		collapsed: false,
	}
	
	toggleCollapsed = () => {
		this.setState({
		  collapsed: !this.state.collapsed,
		});
	};

	
	render(){
		return(
			<div id="page">
				<Layout  style={{ minHeight: '100vh' }}>
					<Sider collapsible>
						<SiderNav/>
					</Sider>
					
					<Layout>
						<Header style={{ position: 'fixed', zIndex: 1, width: '100%',background:'#fff' }}>
							<HeaderContent/>
						</Header>
						<Content>
							Content
						</Content>
						<Footer>
							Footer
						</Footer>
					</Layout>
				</Layout>
			</div>
		)
	}
}

export default Index;