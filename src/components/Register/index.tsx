import React from 'react';
import {Form, Input,} from 'antd';
import {FormComponentProps} from 'antd/lib/form';

interface RegisterProps extends FormComponentProps {

}

class Register extends React.Component<RegisterProps, any> {

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render(): React.ReactNode {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                sm: { span: 4 }
            },
            wrapperCol: {
                sm: { span: 20 }
            },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="账户">
                    {getFieldDecorator('r_userName', {
                        rules: [{ required: true, message: '请输入账号!' }],
                    })(
                        <Input placeholder="请输入您的账号"/>
                    )}

                </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('r_password', {
                        rules: [{ required: true, message: '请输入您的密码!' }],
                    })(
                        <Input type="password" placeholder="请输入您的密码"/>
                    )}
                </Form.Item>
                <Form.Item label="确认密码">
                    {getFieldDecorator('r_confirmPassword', {
                        rules: [{ required: true, message: '请再次输入您的密码!' }],
                    })(
                        <Input type="password" placeholder="请再次输入您的密码"/>
                    )}
                </Form.Item>
            </Form>
        )
    }
}
const RegisterForm = Form.create()(Register);
export default RegisterForm;
