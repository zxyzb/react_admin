import React from 'react'
import { Layout, Button, Icon } from 'antd'
import SiderNav from '../../components/SiderNav'
import HeaderContent from '../../components/Header'
import ContentIndex from '../../components/Content'
import FooterIndex from '../../components/Footer'
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
						<Header style={{width: '100%',background:'#fff',lineHeight:'64px' }}>
							<HeaderContent/>
						</Header>
						<Content>
							<ContentIndex/>
						</Content>
						<Footer>
							<FooterIndex />
						</Footer>
					</Layout>
				</Layout>
			</div>
		)
	}
}

export default Index;