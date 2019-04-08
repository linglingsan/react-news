import React from 'react';
import {Form, Input,} from 'antd';
import {FormComponentProps} from 'antd/lib/form';

interface RegisterProps extends FormComponentProps {

}

class Register extends React.Component<RegisterProps, any> {
    /***
     * 获取表单参数
     */
    handleSubmit = () => {
        let params;
        this.props.form.validateFields((err: boolean) => {
            if (err) return;
            params = this.props.form.getFieldsValue();
        });
        return params;
    }
    /***
     * 重置表单值
     */
    resetValue =() => {
        this.props.form.resetFields();
    }

    render(): React.ReactNode {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                sm: {span: 4}
            },
            wrapperCol: {
                sm: {span: 20}
            },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="账户">
                    {getFieldDecorator('r_userName', {
                        rules: [{required: true, message: '请输入账号!'}],
                    })(
                        <Input placeholder="请输入您的账号"/>
                    )}

                </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('r_password', {
                        rules: [{required: true, message: '请输入您的密码!'}],
                    })(
                        <Input type="password" placeholder="请输入您的密码"/>
                    )}
                </Form.Item>
                <Form.Item label="确认密码">
                    {getFieldDecorator('r_confirmPassword', {
                        rules: [{required: true, message: '请再次输入您的密码!'}],
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
