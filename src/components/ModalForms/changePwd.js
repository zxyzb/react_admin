import React from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd'

const ChangePwdForm = Form.create({ name:'form_in_modal '})(
	class extends React.Component{
		render(){
			const { visible, onCancel, onCreate, form } = this.props;
			const { getFieldDecorator } = form;
			
			return (
				<Modal
				  visible={visible}
				  title="Create a new collection"
				  okText="Create"
				  onCancel={onCancel}
				  onOk={onCreate}
				>
				  <Form layout="vertical">
					<Form.Item label="Title">
					  {getFieldDecorator('title', {
						rules: [{ required: true, message: 'Please input the title of collection!' }],
					  })(<Input />)}
					</Form.Item>
					<Form.Item label="Description">
					  {getFieldDecorator('description')(<Input type="textarea" />)}
					</Form.Item>
					<Form.Item className="collection-create-form_last-form-item">
					  {getFieldDecorator('modifier', {
						initialValue: 'public',
					  })(
						<Radio.Group>
						  <Radio value="public">Public</Radio>
						  <Radio value="private">Private</Radio>
						</Radio.Group>,
					  )}
					</Form.Item>
				  </Form>
				</Modal>
			)
		}
	}
)

export default ChangePwdForm;
