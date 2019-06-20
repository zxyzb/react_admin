import React from 'react';
import { Menu, Dropdown, Icon, message, Row, Col } from 'antd';
import ChangePwdForm from '../ModalForms/changePwd'

function handleMenuClick(e) {
	
	if(e.key == 'changePwd'){
		this.setState({ visible: true });
	}
}

function menu(status){
	return (
		<Menu onClick={handleMenuClick}>
			<Menu.Item key="changePwd">
			  <Icon type="edit" />
			  修改密码
			</Menu.Item>
			<Menu.Item key="logout">
			  <Icon type="logout" />
			  退出登录
			</Menu.Item>
		</Menu>
	)
	
}

class HeaderContent extends React.Component{
	state = {
		visible: false,
	}
	 
	handleCancel = () => {
		this.setState({ visible: false });
	};
	 
	render(){
		return (
			<div>
				<Row type="flex" justify="space-between">
					<Col span={4}></Col>
					<Col span={4} style={{textAlign:'right'}}>
						<Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
						  zxyzb
						</Dropdown.Button>
					</Col>
				</Row>
				
				
				<ChangePwdForm
				  wrappedComponentRef={this.saveFormRef}
				  visible={this.state.visible}
				  onCancel={this.handleCancel}
				  onCreate={this.handleCreate}
				/>
				
				
			</div>
		)
	}
	
}

export default HeaderContent;