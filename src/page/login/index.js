import React from 'react'
import './index.css'
import { Button, Form, Input, Icon, Checkbox } from 'antd'


class NormalLoginForm extends React.Component {
	
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	
	render(){
		const { getFieldDecorator } = this.props.form;
		
		return(
			<div className="login">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<div className="title">欢迎登陆后台管理系统</div>
					<Form.Item>
					  {getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input your username!' }],
					  })(
						<Input
						  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						  placeholder="Username"
						/>,
					  )}
					</Form.Item>
					<Form.Item>
					  {getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					  })(
						<Input
						  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						  type="password"
						  placeholder="Password"
						/>,
					  )}
					</Form.Item>
					<Form.Item>
					  {getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					  })(<Checkbox>记住密码</Checkbox>)}
					  <Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					  </Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login;