import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const menus = [{
	title:'图书管理',
	key:'/book/manager',
	icon:'appstore',
	childen:[
		{
			title:'图书列表',
			key:'/book/list',
		},{
			title:'订单管理',
			key:'/order/list',
		},{
			title:'图书上传',
			key:'/book/upload'
		}
	]
},{
	title:'物流管理',
	key:'/goods/control',
	icon:'appstore',
	childen:[
		{
			title:'物流配置',
			key:'/goods/settings',
			icon:'',
			childen:[
				{
					title:'订单地址',
					key:'/order/address',
					icon:'',
				}
			]
		},{
			title:"中转站",
			key:'/transfer/station',
			icon:'',
		}
	]
},{
	title:'系统管理',
	key:'/sys/control',
	icon:'appstore',
},{
	title:'皮肤管理',
	key:'/skin/control',
	icon:'appstore',
}]

class SiderNav extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };
	
	
	renderMenuItem = ({key, icon, title,}) => {
	  return (
	    <Menu.Item key={key}>
	      <Link to={key}>
	        {icon && <Icon type={icon}/>}
	        <span>{title}</span>
	      </Link>
	    </Menu.Item>
	  )
	}
	renderSubMenu = ({key, icon, title, childen}) => {
	  return (
	    <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
	      {
	        childen && childen.map(item => {
	          return item.childen && item.childen.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
	        })
	      }
	    </Menu.SubMenu>
	  )
	}

  render() {
    return (
			<div id="menu">
				<Menu
				  onClick={this.handleClick}
				  style={{ width: '100%' }}
				  defaultSelectedKeys={['/book/manager']}
				  defaultOpenKeys={['/book/manager']}
				  mode="inline"
					theme="dark"
				>
					{
					  menus && menus.map(item => {
					    return item.childen && item.childen.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
					  })
					}
				</Menu>
			</div>
      
    );
  }
}

export default SiderNav;