import React from 'react';
import { Menu, Dropdown, Button, Icon, message, Row, Col  } from 'antd';

const menu = (
	<Menu onClick={handleMenuClick}>
		<Menu.Item key="1">
		  <Icon type="edit" />
		  修改密码
		</Menu.Item>
		<Menu.Item key="2">
		  <Icon type="logout" />
		  退出登录
		</Menu.Item>
	</Menu>
)

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}


class HeaderContent extends React.Component{

	render(){
		return (
			<Row id="userDrop" type="flex" justify="right">
				<Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
				  userName
				</Dropdown.Button>
			</Row>
		)
	}
	
}

export default HeaderContent;