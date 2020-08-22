import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./myindex.less";

class Login extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
    const formItemLayout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 8,
      },
    };
    console.log(Form);
    const [form] = Form.useForm();

    const onCheck = async () => {
      try {
        const values = await form.validateFields();
        console.log("Success:", values);
      } catch (errorInfo) {
        console.log("Failed:", errorInfo);
      }
    };
    return (
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          {...formItemLayout}
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onClick={onCheck}>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
// const WrappedLoginForm = Form.create({ name: 'normal_login' })(Login);
export default Login;
